/**
 * Editor Page
 * 
 * This is where all the generation is started and handled
 * from UI point of view
 * 
 * @todo: validate options, see comment in renderPattern()
 */

import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import SideNavigation from 'components/SideNavigation';
import AlertDismissable from 'components/AlertDismissable';
import ShapeGrammarCanvas from './components/ShapeGrammarCanvas';
import OptionsBar from './components/OptionsBar';

import './style.css';
import '../style.css';

import Generator from 'service/generator';
import { Store } from 'service/store';

const canvasWidth = 800;
const canvasHeight = 800;
const svgSide = 200;

class Editor extends Component {

    constructor() {
        super();
        this.state = {
            patternUrl: null,
            productType: null,
            patternData: null,
            message: {
                text: "",
                show: false,
                type: "info"
            },
            options: { 
                productType: Store.get("options.product"),
                layoutType: Store.get("options.layout"),
                horizontalCount: 4,
                verticalCount: 4,
                basicShapesIds: JSON.parse(Store.get("options.ornaments")),
                blackandwhite: false,
                chaos: false,
                color: "transparent",
                marginValue: 8,
                transform: false,
                canvasHeight: canvasHeight,
                canvasWidth: canvasWidth,
                svgSide: svgSide,
            }
        }
    }

    componentWillMount() {
        this.renderProduct(this.state.options.productType);
        this.renderPattern(this.state.options);
    }

    handleClick = () => {
        // these are new options from user inputs, for example
        // he drags a slider on Editor screen or changes layout type...
        // const newOptions = {
        //     productType: Store.get("options.product"),
        //     layoutType: Store.get("options.layout"),
        //     horizontalCount: 4,
        //     verticalCount: 4,
        //     basicShapesIds: JSON.parse(Store.get("options.ornaments"))
        // }
        this.renderProduct(this.state.options.productType);
        this.renderPattern(this.state.options);
    }

    renderProduct(type) {
        this.setState({ productType: type });
    }

    renderPattern(options) {
        // validate options, if they are reasonable
        // ...

        if (false) this.setState({ message: {
            text: "Ahoj ty nula",
            show: true,
            type: "info"
        }})

        // result is data container
        Generator.generatePattern(options, (result, viewBox) => {
            this.setState({ patternData: result });
        });
    }

    handleOptionsChange(opts) {
        // convert from options in Options Bar to this options
        // console.log(opts);
        this.setState({
            options: { 
                productType: Store.get("options.product"),
                layoutType: Store.get("options.layout"),
                basicShapesIds: JSON.parse(Store.get("options.ornaments")),
                horizontalCount: opts.blockCount,
                verticalCount: opts.blockCount,
                blackandwhite: opts.blackandwhite,
                chaos: opts.chaos,
                color: opts.color,
                marginValue: opts.marginValue,
                transform: opts.transform,
                canvasHeight: canvasHeight,
                canvasWidth: canvasWidth,
                svgSide: svgSide,
            }
        })
        // render
        // this.renderProduct(this.state.options.productType);
        // this.renderPattern(this.state.options);
    }

    render() {
        return (
            <div className="wrapper">
                <Grid className="page-content page-content_editor_theme" fluid>
                    <AlertDismissable 
                        message={ this.state.message.text } 
                        type={ this.state.message.type } 
                        show={ this.state.message.show }/>
                    <Row>
                        <Col xs={ 1 } >
                            <SideNavigation indicatorNumber={ 3 }/>
                        </Col>
                        {/*this is where pattern is generated on top of product*/}
                        <Col xs={ 11 } sm={ 8 } className="block">
                            <Row>
                                <Col xs={12} className="block text-center">
                                    <ShapeGrammarCanvas 
                                        patternUrl={ this.state.patternUrl }
                                        productType={ this.state.productType }
                                        patternData={this.state.patternData } 
                                        width={ this.state.options.canvasWidth } 
                                        height={ this.state.options.canvasHeight } 
                                        patternBorderSize={ 60 }
                                        backgroundColor={ this.state.options.color }/>
                                </Col>
                            </Row>
                        </Col>
                        {/*settings, here user can change generation options*/}
                        <OptionsBar 
                            xs={ 12 } sm={ 3 } 
                            handleRenderClick={ () => this.handleClick() }
                            handleOptionsChange={ (options) => this.handleOptionsChange(options) }/>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Editor;

