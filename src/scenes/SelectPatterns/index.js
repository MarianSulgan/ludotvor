/**
 * Select Pattern (=Ornament) Page
 */

import React, { Component } from 'react';
import { Grid, Row, Col, Label } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SideNavigation from 'components/SideNavigation';
import OrnamentsSelector from 'components/OrnamentsSelector'
import { Store } from 'service/store';
import Layouts from 'data/layouts';

import './style.css';

class SelectPatterns extends Component {

    constructor() {
        super();
        this.state = {
            counter: layoutToPatternCount()
        }
    }

    handleSelectedCount = (val) => {
        this.setState({
            counter: layoutToPatternCount() - val
        })
    }

    onOrnamentsRender = (val) => {

        if (val > layoutToPatternCount()) {
            Store.remove("options.ornaments");
            this.setState({});
        }

        let temp = this.state.counter - val;
        this.setState({
            counter: ((temp) < 0) ? 0 : temp
        });
    }

    componentWillMount () {
        let temp = Store.getArr("options.ornaments");
        if (temp) {
            let len = temp.length;
            if (len > layoutToPatternCount())
                temp = temp.slice(0, layoutToPatternCount());
                let check = JSON.parse(Store.get("isChange"));
                Store.setArr("options.ornaments", temp);
                if (!check)
                    Store.set("isChange", false);
        }
    }

    render() {
        let sentence;
        if (this.state.counter >= 5) {
            sentence = 
                <p className="text block__text block__text_left">
                    Môžeš si <strong>vybrať</strong> ešte <Label className="label" bsStyle="primary">{ this.state.counter }</Label> vzorov.
                </p>
        } else if ([4, 3, 2].includes(this.state.counter)) {
            sentence = 
                <p className="text block__text block__text_left">
                    Môžeš si <strong>vybrať</strong> ešte <Label className="label" bsStyle="primary">{ this.state.counter }</Label> vzory.
                </p>
        } else if (this.state.counter === 1) {
            sentence = 
                <p className="text block__text block__text_left">
                    Môžeš si <strong>vybrať</strong>{' '}<Label className="label" bsStyle="primary">{ this.state.counter }</Label> posledný vzor.
                </p>
        } else if (this.state.counter === 0) {
            sentence = 
                <p className="text block__text block__text_left">
                    Maximálny počet vzorov označený.
                </p>
        }
        return (
            <div className="wrapper">
                <Grid className="page-content" fluid>
                    <Row>
                        <Col xs={ 3 } sm={ 2 }>
                            <SideNavigation indicatorNumber={ 2 }/>
                        </Col>
                        <Col xs={ 9 } sm={ 10 } className="block">
                            <Row>
                                <h1 className="text block__headline block__headline_h1 block__headline_left">Čo dolina, to iná výšivka.</h1>
                                <p className="text block__text block__text_left">
                                    Veliké preveliké bohatstvo sa ukrýva v neprebernom množstve ľudových vzorov. 
                                    Vyber si, ktoré sa hodia práve teraz, práve tebe. Budú pribúdať! Preto ak chceš pridať aj prvky svojho obľúbeného vzoru a nie sú tu,{' '}
                                    <Link to="/contact">napíš nám</Link>. Doplníme.
                                </p>
                                { sentence }
                            </Row>
                            <Row>
                                <OrnamentsSelector 
                                    all 
                                    isStandalone
                                    handleSelectedCount={ this.handleSelectedCount }
                                    onRender={ this.onOrnamentsRender } 
                                    maxCount={layoutToPatternCount()} />
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default SelectPatterns;

function layoutToPatternCount() {
    switch (Store.get("options.layout")) {
        case Layouts.Grid:
            return 5;
        case Layouts.Free:
            return 10;
        case Layouts.Lines:
            return 6;
        default:
            return 5;
    }
}