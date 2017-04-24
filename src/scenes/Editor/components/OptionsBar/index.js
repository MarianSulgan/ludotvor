/**
 * Sidebar with options in Editor page
 */

import React, { Component } from 'react';
import { Col, Row, Button, Label } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Toggle from 'react-toggle';
import { CirclePicker } from 'react-color';

// import OrnamentsSelector from 'components/OrnamentsSelector';
// import { Store } from 'service/store';
// import Ornaments from 'data/ornaments';
import FontAwesome from 'react-fontawesome';

import './style.css';

const colorSwatches = [
    "#f44336", "#e91e63", "#9c27b0", "#673ab7", 
    "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", 
    "#009688", "#4caf50", "#8bc34a", "#cddc39", 
    "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", 
    "#795548", "#607d8b", "#000000", "ffffff"
];

class OptionsBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blockCount: 4,
            marginValue: 8,
            blackandwhite: false,
            chaos: false,
            transform: false,
            color: "ffffff"
        }
    }

    handleOptionsChange() {
        this.props.handleOptionsChange(this.state);
        // console.log("options changed");
        console.log(this.state);
    }

    handleClick() {
        this.props.handleRenderClick();
    }

    onBlockSliderChange = (val) => {
        this.setState({ blockCount: val }, () => {
            this.handleOptionsChange();
        });
        
    }

    onMarginSliderChange = (val) => {
        this.setState({ marginValue: val }, () => {
            this.handleOptionsChange();
        });
    }

    onColorSettingChange = (e) => {
        this.setState({ blackandwhite: e.target.checked }, () => {
            this.handleOptionsChange();
        });
    }

    onChaosSettingChange = (e) => {
        this.setState({ chaos: !e.target.checked }, () => {
            this.handleOptionsChange();
        });
    }

    onTransformSettingChange = (e) => {
        this.setState({ transform: e.target.checked }, () => {
            this.handleOptionsChange();
        });
    }

    onColorPicked = (color, e) => {
        this.setState({ color: color.hex }, () => {
            this.handleOptionsChange();
        });
    }

    render() {
        // get ornaments
        // let tempArr = [], tempIds = Store.getArr("options.ornaments");
        // for (let i = 0; i < tempIds.length; i++) {
        //     for(let j = 0; j < Ornaments.length; j++) {
        //         if (tempIds[i] === Ornaments[j].id)
        //             tempArr.push(Ornaments[j]);
        //     }
        // }
        return (
            <Col xs={ this.props.xs } sm={ this.props.sm } className="sidebar">

                {/*<Row className="sidebar__block">
                    <h4>Vzory <Button><FontAwesome name="plus" /></Button></h4>
                    <OrnamentsSelector ornamentsArr={ tempArr } isStandalone={ false } />
                </Row>*/}

                {/*<Row>
                    <h2 className="block__headline block__headline_left">
                        Nastavenia
                        {' '}
                        <Button className="button button_unstyled"><FontAwesome name="close" size="2x"/></Button>
                    </h2>
                </Row>*/}

                <Row className="sidebar__block">
                    <p>
                        Počet blokov:{' '}
                        <Label bsStyle="primary">{this.state.blockCount}x{this.state.blockCount}</Label>
                    </p>
                    <Slider 
                        min={1}
                        max={10}
                        dots
                        defaultValue={4}
                        onAfterChange={ this.onBlockSliderChange }/>
                    
                </Row>

                <Row className="sidebar__block">
                    <p>Medzery medzi blokmi</p>
                    <Slider 
                        min={0}
                        max={9}
                        defaultValue={8}
                        onAfterChange={ this.onMarginSliderChange }/>
                </Row>

                {/*<Row className="sidebar__block">
                    <h4>Produkty</h4>
                    <p>Zmeniť produkt</p>
                </Row>*/}

                <Row className="sidebar__block">
                    <span>Čiernobiele</span>
                    {' '}
                    <Toggle
                        defaultChecked={ false }
                        onChange={ (e) => this.onColorSettingChange(e) } 
                        className="block__toggle pull-right"/>
                </Row>

                <Row className="sidebar__block">
                    <span>Pravidelne</span>
                    {' '}
                    <Toggle
                        defaultChecked={ false }
                        onChange={ (e) => this.onChaosSettingChange(e) } 
                        className="block__toggle pull-right"/>
                </Row>

                <Row className="sidebar__block">
                    <span>Transformácie</span>
                    {' '}
                    <Toggle
                        defaultChecked={ false }
                        onChange={ (e) => this.onTransformSettingChange(e) } 
                        className="block__toggle pull-right"/>
                </Row>

                <Row className="sidebar__block">
                    <p>Farba pozadia</p>
                    <CirclePicker
                        onChangeComplete={ this.onColorPicked }
                        color={ this.state.color }
                        colors={ colorSwatches }/>
                </Row>

                <Row className="sidebar__block text-center">
                    {/*generate new pattern button*/}
                    <Button 
                        bsStyle="primary" 
                        onClick={ () => this.handleClick() }
                        className="block__button block__button_main">
                        Generovať
                    </Button>
                    <br />
                    {/*next page button, save, buy, export*/}
                    <Link className="block__button block__button_main btn btn-success" to="/export">Hotovo. Ďalej!</Link>
                </Row>

                <Row className="sidebar__block text-center">
                    <p className="small">
                        Máte nápad na niečo iné?&#8200;
                        <Link to="/contact">Napíšte nám.</Link> 
                        &#8200;Spravíme Vám niečo na mieru.&#8200;<em>Vzor aj softvér.</em>
                    </p>
                </Row>
            </Col>         
        );
    }
}

export default OptionsBar;