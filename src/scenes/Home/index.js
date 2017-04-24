/**
 * Home page
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Button, Col, Image } from 'react-bootstrap';

import './style.css';
import '../style.css';

class Home extends Component {

  render() {
    return(
      <div className="wrapper">
        <Grid className="page-content" fluid>
          <Row>
            <Col xs={ 12 } className="block">
              <h1 className="text block__headline block__headline_h1">Ľudový generátor vzorov. A&nbsp;obchod.</h1>
              <p className="text block__text">
                Folklór a ľudový ornament roky upadal do zabudnutia. Dnes sa však vracia. 
                Všakovako ho všakovako prináša do digitálneho prostredia a spája prvky 
                generatívneho dizajnu a ľudovej ornamentiky. Ľudová tvorivosť prišla na internety.
              </p>
              <p className="text block__text">
                Najprv tvoríš, potom kupuješ. Ak chceš, samozrejme. Každopádne, tvorenie je zadarmo.
              </p>
              <div className="text-center">
                <Link to="/select-product">
                  <Button bsStyle="primary" bsSize="large" className="block__button">Tvoriť</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Grid>
        {/*<Grid className="page-content page-content_gray" fluid>
          <Row>
            <Col xs={12} className="block">
              <h1 className="text block__headline block__headline_h1">Ľudo, tvor! A ľud tvoril.</h1>
              <p className="text block__text">
                Folkór ide. Pozri sa, čo vytvorili ostatní používatelia pred tebou.
                Môžeš sa inšpirovať, potešiť, zhroziť a hromžiť, alebo aj nie. 
                Dúfame, že sa tu niečo prekrásne nájde.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} className="block">
              <Image className="block__image block__image_showcase" src="http://placehold.it/350x150" responsive />
            </Col>
            <Col xs={12} sm={6} className="block">
              <Image className="block__image block__image_showcase" src="http://placehold.it/350x150" responsive />
            </Col>
            <Col xs={12} sm={6} className="block">
              <Image className="block__image block__image_showcase" src="http://placehold.it/350x150" responsive />
            </Col>
            <Col xs={12} sm={6} className="block">
              <Image className="block__image block__image_showcase" src="http://placehold.it/350x150" responsive />
            </Col>
          </Row>
          <Row className="text-center">
            <Link to="/showcase">
              <Button bsStyle="default" bsSize="large" className="block__button">Chcem si prezrieť výtvory</Button>
            </Link>
          </Row>
        </Grid>*/}
      </div>
    )
  };
};

export default Home;