import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SideNavigation from '../../components/SideNavigation';

import '../style.css';

class Export extends Component {
    render() {
        return (
            <div>
                <Grid className="page-content" fluid>
                    <Row>
                        <Col xs={ 3 } sm={ 2 }>
                            <SideNavigation indicatorNumber={ 4 }/>
                        </Col>
                        <Col xs={ 9 } sm={ 10 } className="block">
                            <Row>
                                <h1 className="text block__headline block__headline_h1">Svoj výtvor si veru môžeš aj kúpiť.</h1>
                                <p className="text block__text">
                                    Lorem ipsum, neviem ešte toto ako bude presne vyzerať.
                                </p>
                            </Row>
                            <Row>
                                <Col xs={12} className="block text-center">
                                    <Link className="btn btn-primary" to="/">Domov</Link>
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