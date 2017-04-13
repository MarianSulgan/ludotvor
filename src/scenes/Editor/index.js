import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

import SideNavigation from '../../components/SideNavigation';
import ShapeGrammarCanvas from './components/ShapeGrammarCanvas';
import Shapes from './data/sample.js';
import Products from './data/products.js';
import './style.css';
import '../style.css';
import api from './components/ShapeGrammarCanvas/api';



class Editor extends Component {

    constructor() {
        super();
        this.state = {
            pattern: null,
            productType: null
        }
    }

    componentWillMount() {
        // fake data fetch
        const _shape = Shapes[1];
        // console.log(Shapes[1]);
        // console.log(decor1);
        const _productType = Products.Bag;
        this.setState({ pattern: _shape, productType: _productType });
        // real data fetch
        // let _shape = null;


        let promise = new Promise((resolve, reject) => {
            window.db.findOne({id: "decor3"}, function(err, doc) {
                console.log(err);
                console.log(doc);
                resolve(doc.svgUrl);
            })
        });

        promise.then((svgUrl) => {
            console.log(svgUrl);
            this.setState({ pattern: svgUrl, productType: _productType });
        });

        // window.db.findOne({id: "decor1"}, function(err, doc) {
        //     console.log(eval(doc));
        //     // set state to default initial shape
        //     // self.setState({ pattern: eval(doc), productType: _productType });
        // }).then(function(response) {
        //     console.log(response);
        // });
        

        
    }

    /**
     * "Generate" button click
     * should generate new pattern based on inputs
     */
    handleClick = () => {
        this.setState({ pattern: this.renderPattern() });
        api.hello();
    }

    /**
     * Renders the final pattern
     * in: wrapped structure containing SVG objects and generated shape representation
     * out: complete svg to be attached to page, in format: <svg><content/></svg>
     * @todo: change fake generation
     */
    renderPattern() {
        const shapes = [1, 2];
        return api.generatePattern({
            layoutType: "grid",
            horizontalCount: 4, 
            verticalCount: 3,
            basicShapes: shapes
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
                                        patternUrl={ this.state.pattern }
                                        productType={ this.state.productType }/>
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