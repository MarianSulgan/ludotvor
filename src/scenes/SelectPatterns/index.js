import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'es6-shim';

import SideNavigation from '../../components/SideNavigation';
import ImageWithIcon from './components/ImageWithIcon';
import Ornaments from 'data/ornaments';
import { Store } from 'service/store';

import './style.css';

class SelectPatterns extends Component {

    constructor(props) {
        super(props);
        this.state = { images: null, ornaments: [] };
    }
    
    handleClick(id, state) {
        console.log(id, state);
        console.log(this);
        let temp = this.state.ornaments;
        if (state) {
            // add id to array
            temp.push(id);
        } else {
            // remove id from array
            let index = temp.indexOf(id);
            temp.splice(index, 1);
        }
        this.setState({ ornaments: temp });
    }

    handleLinkClick() {
        let ornamentIds = JSON.stringify(this.state.ornaments);
        Store.set("options.ornaments", ornamentIds);
    }
    
    componentWillMount () {
        this.state = { ornaments: [] };
    }
    

    componentDidMount() {
        // add ornaments loading here
        let _images = Ornaments.map((elem, index) => 
            <ImageWithIcon
                key={ index } 
                src={ elem.url } 
                ornamentId={ elem.id.toString() } 
                handleClick={ (id, state) => this.handleClick(id, state) } />
        );
        this.setState({ images: _images });
    }
    
    render() {
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
                                    Vyber si, ktoré sa hodia práve teraz, práve tebe. Budú pribúdať!
                                </p>
                                <p className="text block__text_left">
                                    <small>Ak chceš pridať aj prvky svojho obľúbeného vzoru a nie sú tu, <Link to="/contact">napíš nám</Link>. Pridáme.</small>
                                </p>
                            </Row>
                            <Row>
                                <div className="row__ornament-selector">
                                { 
                                    /*show loading note or if loaded, display images*/
                                    this.state.images || 
                                    <Col xs={12} className="block">
                                        <p className="block__info-text bg-info">Ornamenty sa načítavajú...</p>
                                    </Col> 
                                }
                                </div>
                            </Row>
                            <Row>
                                <Col xs={12} className="block">
                                    <Link className="btn btn-secondary" to="/editor">Preskočiť</Link>
                                    { ' ' }
                                    <Link className="btn btn-primary" to="/editor" onClick={ () => this.handleLinkClick() }>Vybral som. Ďalej!</Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default SelectPatterns;