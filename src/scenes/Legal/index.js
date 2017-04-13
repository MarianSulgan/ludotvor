import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Lorem from 'react-lorem-component';

import '../style.css';

class LegalTemplate extends Component {
    render() {
        return (
            <div className="wrapper">
                <Grid className="page-content">
                    <Row>
                        <Col xs={12} className="block">
                            <h1 className="text block__headline block__headline_h1">{this.props.headline}</h1>
                            {this.props.text ? <p className="text block__text">{this.props.text}</p> : <Lorem className="text block__text"/>}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

const Conditions = () => (<LegalTemplate headline="Obchodné podmienky"/>);
const Return = () => (<LegalTemplate headline="Reklamačný poriadok"/>);
const Privacy = () => (<LegalTemplate headline="Ochrana osobných údajov"/>);
const Shop = () => (<LegalTemplate headline="Ako nakupovať"/>);
const Payment = () => (<LegalTemplate headline="Možnosti platby"/>);
const Shipping = () => (<LegalTemplate headline="Doprava"/>);


const Legal = {
    Conditions: Conditions,
    Return: Return,
    Privacy: Privacy,
    Shop: Shop,
    Payment: Payment,
    Shipping: Shipping,
}

export default Legal;