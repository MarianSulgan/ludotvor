/**
 * Home page
 * 
 * @todo: finish showcase section
 * 
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Button, Col } from 'react-bootstrap';

import './style.css';
import '../style.css';
import './components/CreativeButtons/css/component.css';

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
                Ľudo ho prináša do digitálneho prostredia a spája prvky 
                generatívneho dizajnu a ľudovej ornamentiky. Ľudová tvorivosť prišla na internety. <em>Tadá!</em>
              </p>
              <p className="text block__text">
                Najprv tvoríš, potom kupuješ. Ak chceš, samozrejme. Každopádne, tvorenie je zadarmo. Ľudo je tvorivý tvor.
              </p>
              <div className="button-div text-center">
                <Link to="/select-product">
                  <Button bsStyle="primary" bsSize="large" className="button button_lg block__button btn btn-4 btn-4c icon-arrow-right">Tvoriť</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Grid>

        {/*showcase section - to be finished later, just the idea */}

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
  )}
};

export default Home;