/**
 * Select layout page
 * 
 * @todo: map layout items to some json definition of products, if there
 * is a DB of products to choose from, so it is sustainable
 */

import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SideNavigation from '../../components/SideNavigation';

import ImageGrid from './images/grid.svg';
import ImageFree from './images/free.svg';
import ImageLines from './images/lines.svg';

import Layouts from 'data/layouts';
import { Store } from 'service/store';

import '../style.css';

class SelectLayout extends Component {

    handleClick(layout) {
        Store.set("options.layout", layout);
        // switch(layout) {
        //     case Layouts.Grid:
        //         console.log("grid");
        //         break;
        //     case Layouts.Lines:
        //         console.log("lines");
        //         break;
        //     case Layouts.Free:
        //         console.log("free");
        //         break;
        //     default:
        //         console.log("Unknown layout type selected? Weird.");
        //         break;
        // }
    }

    render() {
        return (
            <div className="wrapper">
                <Grid className="page-content" fluid>
                    <Row>
                        <Col xs={ 3 } sm={ 2 }>
                            <SideNavigation indicatorNumber={ 1 }/>
                        </Col>
                        <Col xs={ 9 } sm={ 10 } className="block">
                            <Row>
                                <h1 className="text block__headline block__headline_left block__headline_h1">Riadok sem, mriežka tam, vzhľad skladám.</h1>
                                <p className="text block__text block__text_left">
                                    Vyber si rozloženie prvkov na produkte, ktorý si si vybral. 
                                    Že by to všetko také voľajaké dobre poukladané bolo. A hlavne peknô! Inak, všetko sa to dá zmeniť aj neskôr, takže žiadne strachy.
                                </p>
                            </Row>
                            <Row>
                                <Col xs={6} sm={4} className="block block_layout">
                                    <Link to="/select-patterns" className="block__link block__link_unstyled" onClick={ () => this.handleClick(Layouts.Grid) }>
                                        <Image src={ ImageGrid } responsive className="block__image block__image_product" />
                                        <h2 className="text block__headline block__headline_h2">Mriežka</h2>
                                        <p className="text block__text">Plocha vyplnená vzormi v oboch smeroch. Dole, hore, doprava aj doľava.</p>
                                    </Link>
                                </Col>
                                <Col xs={6} sm={4} className="block block_layout">
                                    <Link to="/select-patterns" className="block__link block__link_unstyled" onClick={ () => this.handleClick(Layouts.Lines)}>
                                        <Image src={ ImageLines } responsive className="block__image block__image_product" />
                                        <h2 className="text block__headline block__headline_h2">Riadky</h2>
                                        <p className="text block__text">Vzory usporiadané do riadkov. Jeden riadok, druhý riadok...</p>
                                    </Link>
                                </Col>
                                <Col xs={6} sm={4} className="block block_layout">
                                    <Link to="/select-patterns" className="block__link block__link_unstyled" onClick={ () => this.handleClick(Layouts.Free)}>
                                        <Image src={ ImageFree } responsive className="block__image block__image_product" />
                                        <h2 className="text block__headline block__headline_h2">Voľnééé</h2>
                                        <p className="text block__text">Chaos! Ale nie, to sú len rovnomerne hoc neštrukturovane rozhodené vzory.</p>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default SelectLayout;