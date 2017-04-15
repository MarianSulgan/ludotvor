/**
 * @todo: validate options, see comment in renderPattern()
 */

import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

import SideNavigation from '../../components/SideNavigation';
import ShapeGrammarCanvas from './components/ShapeGrammarCanvas';

import './style.css';
import '../style.css';

import Products from './data/products.js';
import api from './components/ShapeGrammarCanvas/api';

class Editor extends Component {

    constructor() {
        super();
        this.state = {
            patternUrl: null,
            productType: null,
            patternData: null
        }
    }

    componentWillMount() {
        // default options selected through app flow,
        // for example user chose grid layout, two ornaments and
        // bag for pattern placement
        const options = {
            productType: Products.Bag, 
            layoutType: "grid",
            horizontalCount: 4,
            verticalCount: 4,
            basicShapesIds: ["decor1", "decor2"]
        }
        this.renderPattern(options);
    }

    handleClick = () => {
        // these are new options from user inputs, for example
        // he drags a slider on Editor screen or changes layout type...
        const newOptions = {
            productType: Products.Bag, 
            layoutType: "grid",
            horizontalCount: 4,
            verticalCount: 4,
            basicShapesIds: ["decor2", "decor1"]
        }
        this.renderPattern(newOptions);
    }

    renderPattern(options) {
        // validate options, if they are reasonable
        // ...

        // result is data container
        api.generatePattern(options, (result) => {
            console.log("Callback result: ", result);
            this.setState({ patternData: result, productType: options.productType });
        });
    }

    render() {
        return (
            <div className="wrapper">
                <Grid className="page-content page-content_editor_theme" fluid>
                    <Row>
                        <Col xs={ 3 } sm={ 2 }>
                            <SideNavigation indicatorNumber={ 3 }/>
                            <Row>
                                <Button 
                                    bsStyle="primary" 
                                    bsSize="large" 
                                    className="block__button button_margin button_on-top"
                                    onClick={ this.handleClick }
                                    >
                                    Generovať
                                </Button>
                            </Row>
                            {/*<Row>
                                <Link className="btn btn-success btn-lg button button_primary button_on-top button_margin" to="/export">Hotovo</Link>
                            </Row>*/}
                        </Col>
                        <Col xs={ 9 } sm={ 10 } className="block">
                            <Row>
                                <Col xs={12} className="block text-center">
                                    <ShapeGrammarCanvas 
                                        patternUrl={ this.state.patternUrl }
                                        productType={ this.state.productType }
                                        patternData={this.state.patternData } />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Editor;

