/**
 * Export Page
 * 
 * Last page in main app flow
 * Used to buy or download goods
 */

import React, { Component } from 'react';
import { Grid, Row, Col, Button, ButtonGroup, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Store } from 'service/store';
import Products from 'data/products';
import SizeButton from './components/SizeButton';

import '../style.css';
import './style.css';

const tshirtSizes = [ "xs", "s", "m", "l", "xl" ];

class Export extends Component {

    constructor() {
        super();
        this.state = {
            selected: "",
            number: 1
        }
    }

    handleNewClick() {
        // clean start, remove saved data
        Store.remove("options.product");
        Store.remove("options.layout");
        Store.remove("options.ornaments");
        Store.remove("sgCanvasArr");
    }

    handleSizeClick = (size) => {
        this.setState({
            selected: size
        })
    }

    handleNumberChange = (e) => {
        let temp = e.target.value;
        if ((!isNumeric(temp) || temp < 1) && temp !== "")
            temp = 1;
        this.setState({
            number: temp
        });
    }

    getNumberValidationState() {
        console.log(this.state.number);
        if (isNumeric(this.state.number) && this.state.number > 0 && this.state.number < 20) 
            return 'success';
        else
            return 'error';
    }

    render() {

        let sizes;
        if (Store.get("options.product") === Products.Tshirt) {
            sizes = tshirtSizes.map((size, index) => 
                <SizeButton 
                    key={ index }
                    handleSizeClick={ this.handleSizeClick }
                    size={ size }
                    selected={ this.state.selected }
                />
            );
        }

        return (
            <div className="wrapper">
                <Grid className="page-content" fluid>
                    <Row>
                        {/*<Col xs={ 2 } className="block items-container">
                            { window.svg }
                        </Col>*/}
                        <Col xs={ 12 } className="block">
                            <Row>
                                <Col xs={ 12 }>
                                    <h1 className="text block__headline block__headline_h1">Svoj výtvor si veru môžeš aj kúpiť.</h1>
                                    <p className="text block__text">
                                        Je to hotové! Ak sa ti výsledok páči, pokojne si ho môžeš aj objednať. Stačí zadať 
                                        veľkosť a počet kusov. A ak si chceš objednať viac rôznych výtvorov naraz, môžeš tak 
                                        spraviť vo <Link to="/dashboard">svojom profile</Link> v záložke Výtvory.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <h2 className="text block__headline block__headline_h2">Objednávka</h2>
                                {/*good with artwork*/}
                                <Col xs={12} sm={6} className="block items-container">
                                    <div className="items-container__wrapper">
                                        { window.svg }
                                    </div>
                                </Col>
                                {/*order form*/}
                                <Col xs={12} sm={6}>
                                    <div className="order-form-container">
                                        <form className="form text">
                                            <FormGroup>
                                                <ControlLabel>Vyber veľkosť:</ControlLabel><br/>
                                                <ButtonGroup className="form__control form__control_buttongroup">
                                                    { sizes }
                                                </ButtonGroup>
                                            </FormGroup>
                                            <FormGroup
                                                className="number-selector"
                                              controlId="formItemsNumber"
                                              validationState={this.getNumberValidationState()}>
                                              <ControlLabel>Počet kusov:</ControlLabel><br/>
                                              <FormControl
                                                type="number"
                                                value={this.state.number}
                                                placeholder="Počet kusov"
                                                onChange={this.handleNumberChange}
                                              />
                                              <FormControl.Feedback />
                                            </FormGroup>
                                        </form>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} className="block text-center">
                                    <Button className="button block__button" onClick={ this.handleOrderClick } bsStyle="success">
                                        Objednať
                                    </Button>
                                    {' '}
                                    <Link className="button block__button btn btn-secondary" to="/" onClick={ () => this.handleNewClick() }>Odznova</Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

function isNumeric(num){
    return !isNaN(num)
}

export default Export;