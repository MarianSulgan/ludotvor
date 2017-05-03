/**
 * Export Page
 * 
 * Last page in main app flow
 * Used to buy or download goods
 */

import React, { Component } from 'react';
import { Grid, Row, Col, Button, ButtonGroup, ControlLabel, FormGroup, FormControl, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Store } from 'service/store';
import Products from 'data/products';
import Pricing from 'data/pricing';
import SizeButton from './components/SizeButton';
import Auth from 'service/auth'

import '../style.css';
import './style.css';

const tshirtSizes = [ "xs", "s", "m", "l", "xl" ];

class Export extends Component {

    constructor() {
        super();
        let defaultNumber = 1, defaultSize = "m";
        this.state = {
            selected: defaultSize,
            number: defaultNumber,
            price: Pricing.getPrice(Store.get("options.product"), defaultNumber),
            shipping: "post",
            payment: "post",
            finished: false,
            alertVisible: false
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
        }, () => {
            this.setState({
                price: Pricing.getPrice(Store.get("options.product"), this.state.number)
            })
        });
    }

    getNumberValidationState() {
        console.log(this.state.number);
        if (isNumeric(this.state.number) && this.state.number > 0 && this.state.number < 20) 
            return 'success';
        else
            return 'error';
    }

    handleShippingChange = (e) => {
        this.setState({
            shipping: e.target.value,
            price: (e.target.value === "inperson") ? this.state.price - 4 : this.state.price + 4
        })
    }

    handleOrderClick = () => {
        this.setState({
            finished: true,
            alertVisible: true
        })
    }

    handleAlertDismiss = () => {
        this.setState({
            finished: false,
            alertVisible: false
        })
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

        // convert string (saved svg) to html and insert
        const orderSvgString = Store.get("orderSvg");
        const orderSvgElement = <div dangerouslySetInnerHTML={{__html: orderSvgString }} />


        let add = Auth.getCurrentUser().address;
        let address = "";
        if (add)
            address = add.streetAddress + ", " + add.postalCode + " " + add.city + ", " + add.state;

        return (
            <div className="wrapper">
                <Grid className="page-content" fluid>
                    <Row>
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
                                {
                                    !Auth.isLoggedIn() ?
                                    <p className="text block__text">
                                        Ak si chceš svoj výtvor naozaj aj kúpiť, <Link to="/login">prihlás sa</Link>, prosím. Je to tak pre nás jednoduchšie a pre teba pohodlnejšie. Proste najvác.
                                    </p>:
                                    null
                                }
                                { 
                                    (this.state.finished && this.state.alertVisible) ? 
                                    <Col xs={ 12 }>
                                        <Alert bsStyle="success" className="text">
                                            <strong>Objednanô!</strong> Ideme vyrábať. Čoskoro sa budeš môcť promenádovať s&nbsp;novými vecičkami.
                                            Ak si sa kdesi pomýlil alebo čo, bez všetkého <Link to="/contact">napíš</Link>.
                                        </Alert>
                                    </Col> :
                                    null
                                }
                            </Row>
                            { 
                                !this.state.finished && Auth.isLoggedIn() ?
                                <Row>
                                    <Col xs={12}>
                                        <h2 className="text block__headline block__headline_h2">Objednávka</h2>
                                    </Col>

                                    {/*good with artwork*/}
                                    {/*<Col xs={12} sm={6} className="block items-container">
                                        <div className="items-container__wrapper">
                                            { orderSvgElement }
                                        </div>
                                    </Col>*/}
                                    
                                    {/*order form*/}
                                    {/*<Col xs={12} sm={6}>*/}
                                    <Col xs={12}>
                                        <div className="order-form-container">
                                            <form className="form text">

                                                <FormGroup className="form__section">
                                                    <ControlLabel>Vyber veľkosť:</ControlLabel><br />
                                                    <ButtonGroup className="form__control form__control_buttongroup">
                                                        {sizes}
                                                    </ButtonGroup>
                                                </FormGroup>

                                                <FormGroup
                                                    className="form__section form__section_number-selector"
                                                    controlId="formItemsNumber"
                                                    validationState={this.getNumberValidationState()}>
                                                    <ControlLabel>Počet kusov:</ControlLabel><br />
                                                    <FormControl
                                                        type="number"
                                                        value={this.state.number}
                                                        placeholder="Počet kusov"
                                                        onChange={this.handleNumberChange}
                                                    />
                                                    <FormControl.Feedback />
                                                </FormGroup>

                                                <FormGroup>
                                                <ControlLabel>Spôsob dopravy:</ControlLabel>
                                                <FormControl 
                                                    componentClass="select" 
                                                    placeholder="Vyber ako ti doručíme balíček"
                                                    onChange={ this.handleShippingChange } >
                                                    <option value="post">Klasika, balík poštou. Slovenskou poštou.</option>
                                                    <option value="inperson">Oné, prídem si po to sám</option>
                                                </FormControl>
                                                </FormGroup>

                                                {
                                                    this.state.shipping === "inperson" ?
                                                    <p className="text block__text">V tom prípade ťa bude balíček čakať za 14 dní na <a href="https://goo.gl/maps/PTNsQNe7vB72">tejto adrese.</a></p> :
                                                    null
                                                }

                                                <FormGroup>
                                                <ControlLabel>A ešte zaplatiť. Ako sa ti to hodí?</ControlLabel>
                                                <FormControl 
                                                    componentClass="select" 
                                                    placeholder="Spôsob platby"
                                                    onChange={ this.handlePaymentChange }>
                                                    {/*<option value="post">No veď na dobierku...</option>*/}
                                                    <option value="bankwire">Prevodom na účet</option>
                                                    { this.state.shipping === "inperson" ? <option value="bankwire">V hotovosti</option> : "" }
                                                </FormControl>
                                                </FormGroup>

                                                <FormGroup>
                                                    <ControlLabel>Adresa:</ControlLabel>
                                                    <FormControl 
                                                    componentClass="textarea" 
                                                    placeholder="Adresa, napríklad Jánošíkova 15, 921 01 Piešťany" 
                                                    defaultValue={ address } />
                                                </FormGroup>

                                                <FormGroup className="form__section form__section_price">
                                                    <ControlLabel>Cena:</ControlLabel><br/>
                                                    <span className="result-price">{ this.state.price } &euro;</span>
                                                </FormGroup>

                                            
                                            </form>
                                        </div>
                                    </Col>
                                </Row> :
                                null
                            }
                            {
                                !this.state.finished && Auth.isLoggedIn() ?
                                <Row>
                                    <Col xs={12} className="block text-center">
                                        <Button bsSize="large" className="button block__button" onClick={ this.handleOrderClick } bsStyle="success">
                                            Objednať
                                        </Button>
                                        {' '}
                                        {/*<Link className="button block__button btn btn-secondary" to="/" onClick={ () => this.handleNewClick() }>Domov</Link>*/}
                                    </Col>
                                </Row> :
                                <Row>
                                    <Col xs={12} className="block text-center">
                                        <Link className="button block__button btn btn-secondary" to="/" onClick={ () => this.handleNewClick() }>Domov</Link>
                                    </Col>
                                </Row>
                            }
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