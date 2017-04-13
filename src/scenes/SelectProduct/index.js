/**
 * Select product page
 * 
 * @todo: map product items to some json structure describing products, if,
 * in future, more products are available
 */

import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SideNavigation from '../../components/SideNavigation';
import ImageBag from './images/bag.svg';
import '../style.css';
import './style.css';

const SelectProduct = () => (
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
              <Link to="/select-layout" className="block__link block__link_unstyled">
                <Image src="http://placehold.it/200x200" responsive className="block__image block__image_product" />
                <h2 className="text block__headline block__headline_h2">Tričko</h2>
                <p className="text block__text">Lorem ipsum dolor sit amet. Text.</p>
              </Link>
            </Col>
            <Col xs={6} sm={4} className="block block_product">
              <Link to="/select-layout" className="block__link block__link_unstyled">
                <Image src={ ImageBag } responsive className="block__image block__image_product" />
                <h2 className="text block__headline block__headline_h2">Taška</h2>
                <p className="text block__text">Fajnová plátená taška na nákupy, nech nenosíš tie patizóny v&nbsp;igelitke.</p>
              </Link>
            </Col>
            <Col xs={6} sm={4} className="block block_product">
              <Link to="/select-layout" className="block__link block__link_unstyled">
                <Image src="http://placehold.it/200x200" responsive className="block__image block__image_product" />
                <h2 className="text block__headline block__headline_h2">Digitálne</h2>
                <p className="text block__text">Lorem ipsum dolor sit amet. Text.</p>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default SelectProduct;