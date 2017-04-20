import React, { Component } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './style.css';

class OptionsBar extends Component {

    handleClick() {
        this.props.handleRenderClick();
    }

    render() {
        return (
            <Col xs={ this.props.xs } sm={ this.props.sm } className="block block_sidebar sidebar">
                <Row className="sidebar__block">
                    <h4>Vzory</h4>
                    <p>Pridať/odobrať vzory</p>
                </Row>
                <Row className="sidebar__block">
                    <h4>Rozloženie</h4>
                    <p>Zmeniť rozloženie</p>
                    <p>Počet blokov na výšku/šírku</p>
                    <p>Medzery medzi blokmi</p>
                </Row>
                <Row className="sidebar__block">
                    <h4>Produkty</h4>
                    <p>Zmeniť produkt</p>
                </Row>
                <Row className="sidebar__block">
                    <h4>Ostatné</h4>
                    <p>Čiernobiela verzia</p>
                    <p>Pravidelné/nepravidelné</p>
                    <p>Farba pozadia</p>
                    <p>Transformácie</p>
                </Row>
                {/*generate new pattern button*/}
                <Row className="sidebar__block text-center">
                    <Button 
                        bsStyle="primary" 
                        onClick={ () => this.handleClick() }
                        className="block__button">
                        Generovať
                    </Button>
                    { ' ' }
                    {/*next page button, save, buy, export*/}
                    <Link className="block__button btn btn-success" to="/export">Hotovo. Ďalej!</Link>
                </Row>
            </Col>         
        );
    }
}

export default OptionsBar;