/**
 * Editor Page
 * 
 * This is where all the generation is started and handled
 * from UI point of view
 * 
 * @todo: validate options, see comment in renderPattern()
 */

import React, { Component } from 'react';
import { Grid, Row, Col, Alert, Clearfix } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SideNavigation from 'components/SideNavigation';
import ShapeGrammarCanvas from './components/ShapeGrammarCanvas';
import OptionsBar from './components/OptionsBar';

import './style.css';
import '../style.css';

import Generator from 'service/generator';
import { Store } from 'service/store';
import Layouts from 'data/layouts';
import Products from 'data/products';

const svgSide = 200;
const patternBorderSize = 60;

class Editor extends Component {

    constructor() {
        super();
        this.state = {
            patternUrl: null,
            // productType: null,
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
                canvasHeight: _canvasHeight(Store.get("options.layout")),
                canvasWidth: _canvasWidth(Store.get("options.layout")),
                svgSide: svgSide,
                freeSide: 150,
                freeCount: 5,
                lineCount: 5
            },
            counter: 0,
            alertVisible: false
        }
    }

    componentWillMount() {
        let _canvas = Store.get("sg_canvas");
        let _change = JSON.parse(Store.get("isChange"));

        if (_canvas === null || _change === true) {
            this.renderProduct(this.state.options.productType);
            this.renderPattern(this.state.options, () => {
                // save state to variable
                Store.setArr("sg_canvas", this.state);
                Store.set("isChange", false);
            });
            window.isCanvasRendered = true;
        } else {
            // load rendered canvas from variable (where previous state was stored)
            this.setState(Store.getArr("sg_canvas"));
        }
    }

    handleRenderClick = () => {
        this.renderProduct(this.state.options.productType);
        this.renderPattern(this.state.options, () => {
            Store.setArr("sg_canvas", this.state);
            Store.setArr("isChange", false);
        });
    }

    renderProduct(type) {
        this.setState({ productType: type });
    }

    renderPattern(options, callback) {
        // _result_ is data container
        Generator.generatePattern(options, (result) => {
            
            if (result.newCanvasDimensions) { // set dimension of canvas and then, state
                this.setState({
                    options: {
                        ...this.state.options,
                        canvasWidth: result.newCanvasDimensions.width,
                        canvasHeight: result.newCanvasDimensions.height
                    },
                    patternData: result
                }, () => {
                    if (callback)
                        callback();
                })
            } else { // only set state
                this.setState({ patternData: result }, () => {
                    if (callback)
                        callback();
                });
            }
        });
    }

    handleOptionsChange(opts, changedOptionName) {
        // convert from options in Options Bar to _this_ options
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
                canvasHeight: _canvasHeight(Store.get("options.layout")),
                canvasWidth: _canvasWidth(Store.get("options.layout")),
                svgSide: svgSide,
                freeSide: opts.freeSide,
                freeCount: opts.freeCount,
                lineCount: opts.lineCount
            }
        }, () => {
            // if options was changed to black and white, do not render new pattern, 
            // only use filter and save result to Store
            if (changedOptionName === "blackandwhite") {
                Store.setArr("sg_canvas", this.state);
                Store.setArr("isChange", false);
            } else {
                this.renderPattern(this.state.options, () => {
                    Store.setArr("sg_canvas", this.state);
                    Store.setArr("isChange", false);
                });
            }
        })
    }

    // @todo: replace with Storage functionality
    // -> when used with, it reloads unpredictably, fix
    handleFinishedClicked = () => {

        // load array from storage
        let arr = null;
        try {
            arr = JSON.parse(localStorage.getItem("user.created"));
        } catch (error) {
            console.err("Error while saving this.state");            
        }
        if (arr == null)
            arr = [];
        
        // detect if not already saved in storage
        let thisString = JSON.stringify(this.state);
        for (let i = 0; i < arr.length; i++) {
            if (JSON.stringify(arr[i]) === thisString)
                return;
        }

        // save new state to storage
        arr.push(this.state);
        this.setState({ alertVisible: false }, () => {
            localStorage.setItem("user.created", JSON.stringify(arr));
        })

        this.setState({ alertVisible: true });
    }

    handleBackClick() {
        // one step back
    }

    handleForwardClick() {
        // one step forward, if back was pressed
    }

    handleDismiss = () => {
        this.setState({ alertVisible: false })
    }

    render() {

        const canvas = 
            <ShapeGrammarCanvas 
                patternUrl={ this.state.patternUrl }
                productType={ this.state.options.productType }
                layoutType={ this.state.options.layoutType }
                patternData={this.state.patternData } 
                width={ this.state.options.canvasWidth } 
                height={ this.state.options.canvasHeight } 
                patternBorderSize={ patternBorderSize }
                backgroundColor={ this.state.options.color }
                blackandwhite={ this.state.options.blackandwhite }
            />;
                
        /*const _class = 
            " canvas_" + Products.toString(this.state.options.productType) + " " +
            "canvas_" + Layouts.toString(this.state.options.layoutType) + " ";

        const canvas = 
            <div className="canvas_aap">
                <ArtworkAndProduct 
                    product={ this.state.options.productType }
                    pattern={ this.state.patternData }
                    layout={ this.state.options.layoutType }
                    className={ _class }
                    options={ this.state.options }
                />
            </div>*/

        return (
            <div className="wrapper">
                <Grid className="page-content page-content_editor_theme" fluid>
                    <Row>
                        <Col xs={ 1 } >
                            <SideNavigation indicatorNumber={ 3 }/>
                        </Col>
                        {/*this is where pattern is generated on top of product*/}
                        <Col xs={ 11 } sm={ 8 } className="block">
                            <Row>
                                <Col xs={12} className="block text-center">
                                    {
                                        this.state.alertVisible ?
                                        <Alert bsStyle="success" className="editor__alert text" onDismiss={ this.handleDismiss }>
                                            <strong>Úspešne uložené.</strong> Ak sa pozrieš do svojho <Link to="/dashboard">profilu</Link>, nájdeš to tam. Tak to je fantastické.
                                        </Alert>
                                        :
                                        null
                                    }
                                    { canvas }
                                </Col>
                            </Row>
                        </Col>
                        <Clearfix visibleXsBlock />
                        {/*settings, here user can change generation options*/}
                        <OptionsBar 
                            xs={11} xsOffset={1} sm={ 3 } smOffset={ 0 }
                            type={ this.state.options.layoutType }
                            handleRenderClick={ () => this.handleRenderClick() }
                            handleOptionsChange={ (options, changed) => this.handleOptionsChange(options, changed) }
                            handleFinishedClicked={ this.handleFinishedClicked } 
                            handleBackClick={ () => this.handleBackClick() } 
                            handleForwardClick={ () => this.handleForwardClick() } 
                            options={ this.state.options } />
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Editor;

/**
 * COnvert layout to canvas dimensions
 */

/**
 * Get height based on layout type
 * @param {*} layout 
 */
function _canvasHeight(layout) {
    switch(layout) {
        case Layouts.Grid:
            return 800;
        case Layouts.Lines:
            let temp = Store.get("lines_ch");
            if (temp)
                return parseInt(temp, 10);
            return 1600;
        case Layouts.Free:
            if (Store.get("options.product") === Products.Bag)
                return 800;
            else
                return 1500;
        default:
            return 800;
    }
}

/**
 * Get width based on layout type
 * @param {*} layout 
 */
function _canvasWidth(layout) {
    switch(layout) {
        case Layouts.Grid:
            return 800;
        case Layouts.Lines:
            let temp = Store.get("lines_cw");
            if (temp)
                return parseInt(temp, 10);
            return 800;
        case Layouts.Free:
            return 800;
        default:
            return 800;
    }
}

