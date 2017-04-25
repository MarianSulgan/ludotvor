/**
 * Select Pattern (=Ornament) Page
 */

import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SideNavigation from 'components/SideNavigation';
import OrnamentsSelector from 'components/OrnamentsSelector'

import Filter from './components/Filter';

import './style.css';

class SelectPatterns extends Component {

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
                                {/*<Filter />*/}
                            </Row>
                            <Row>
                                <OrnamentsSelector all isStandalone={ true } />
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default SelectPatterns;