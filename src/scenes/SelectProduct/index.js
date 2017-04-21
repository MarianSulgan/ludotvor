/**
 * Select product page
 * 
 * @todo: map product items to some json structure describing products, if,
 * in future, more products are available
 */

import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SideNavigation from '../../components/SideNavigation';

import ImageBag from './images/bag.svg';
import ImageTshirt from './images/tshirt.svg';
import ImageDigital from './images/digital.svg';

import Ornaments from '../../data/ornaments';
import { Store } from 'service/store';
import Products from 'data/products';

import '../style.css';
import './style.css';

class SelectProduct extends Component {

  handleClick(product) {
    Store.set("options.product", product);
    // switch(product) {
    //     case Products.Bag:
    //         console.log("Bag");
    //         break;
    //     case Products.Tshirt:
    //         console.log("Tshirt");
    //         break;
    //     case Products.Digital:
    //         console.log("Digital");
    //         break;
    //     default:
    //         console.log("Unknown layout type selected? Weird.");
    //         break;
    // }
  }

  render() {
    return(
      <div className="wrapper">
        <Grid className="page-content" fluid>
          <Row>
            <Col xs={ 3 } sm={ 2 }>
                <SideNavigation indicatorNumber={ 0 }/>
            </Col>
            <Col xs={ 9 } sm={ 10 } className="block">
              <Row>
                <h1 className="text block__headline block__headline_h1 block__headline_left">Pekné vzory sú na&nbsp;to, aby sa používali.</h1>
                <p className="text block__text block__text_left">
                  A pekné veci sú na to, aby sa nosili. Vyber si kam chceš svoj 
                  budúci vzor umiestniť. Nemôže predsa zostať len tak na internetoch. 
                  To by bola večná škoda.
                </p>
              </Row>
              <Row>
                <Col xs={6} sm={4} className="block block_product">
                  <Link to="/select-layout" className="block__link block__link_unstyled" onClick={ () => this.handleClick(Products.Tshirt)}>
                    <Image src={ ImageTshirt } responsive className="block__image block__image_product" />
                    <h2 className="text block__headline block__headline_h2">Tričko</h2>
                    <p className="text block__text">Klasika. Parádne tričko zo stopercentnej bavlny. Krásne a pohodlné.</p>
                  </Link>
                </Col>
                <Col xs={6} sm={4} className="block block_product">
                  <Link to="/select-layout" className="block__link block__link_unstyled" onClick={ () => this.handleClick(Products.Bag)}>
                    <Image src={ ImageBag } responsive className="block__image block__image_product" />
                    <h2 className="text block__headline block__headline_h2">Taška</h2>
                    <p className="text block__text">Fajnová plátená taška na nákupy, nech nenosíš tie patizóny v&nbsp;igelitke.</p>
                  </Link>
                </Col>
                <Col xs={6} sm={4} className="block block_product">
                  <Link to="/select-layout" className="block__link block__link_unstyled" onClick={ () => this.handleClick(Products.Digital)}>
                    <Image src={ ImageDigital } responsive className="block__image block__image_product" />
                    <h2 className="text block__headline block__headline_h2">Digitálne</h2>
                    <p className="text block__text">Nemôžeš to chytiť, ale pekné to je aj tak. Pozadie na tvoj smartfoun, laptop alebo len tak, obrázok.</p>
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

export default SelectProduct;
