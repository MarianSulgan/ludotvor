/**
 * @todo: responsive footer styling
 * @todo: social networks footer placement
 */

import React, { Component } from 'react';
// import FontAwesome from 'react-fontawesome';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './style.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <Grid>
                    {/*<Row className="footer__block footer__block--social text-center">
                        <FontAwesome name="facebook" size="lg" />
                        <FontAwesome name="twitter" size="lg" />
                    </Row>*/}
                    <Row className="footer__block footer__block--links">
                        <Col xs={ 12 } sm={ 6 }>
                            <ul className="list list_footer list_unstyled text-right">
                                <li>
                                    <Link to="/legal-conditions">
                                        Obchodné podmienky
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/privacy-protection">
                                        Ochrana osobných údajov
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/return-conditions">
                                        Reklamácie
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={ 12 } sm={ 6 }>
                            <ul className="list list_footer list_unstyled text-left">
                                <li>
                                    <Link to="/how-to-shop">
                                        Ako nakupovať
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/shipping">
                                        Doprava
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/payment-options">
                                        Platba
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="footer__block footer__block--copyright text-center">
                        <span>2017 © MŠ. Vytvorené so ❤. 
                            <Link to="/styleguide">Identita značky.</Link>.
                        </span>
                    </Row>
                </Grid>
            </footer>
        );
    }
}

export default Footer;