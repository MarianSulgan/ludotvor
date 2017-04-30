/**
 * Export Page
 * 
 * Last page in main app flow
 * Used to buy or download goods
 */

import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Store } from 'service/store';

import '../style.css';
import './style.css';

class Export extends Component {

    handleClick() {
        console.log("hello");
        // clean start, remove saved data
        Store.remove("options.product");
        Store.remove("options.layout");
        Store.remove("options.ornaments");
        Store.remove("sgCanvasArr");
    }

    render() {
        return (
            <div className="wrapper">
                <Grid className="page-content" fluid>
                    <Row>
                        <Col xs={ 2 } className="block items-container">
                            { window.svg }
                        </Col>
                        <Col xs={ 10 } className="block">
                            <Row>
                                <Col xs={ 12 }>
                                    <h1 className="text block__headline block__headline_h1">Svoj výtvor si veru môžeš aj kúpiť.</h1>
                                    <p className="text block__text">
                                        Lorem ipsum, neviem ešte toto ako bude presne vyzerať.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} className="block text-center">
                                    <Link className="button block__button btn btn-primary" to="/" onClick={ () => this.handleClick() }>Domov</Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Export;