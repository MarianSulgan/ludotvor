/**
 * Sidebar with options in Editor page
 * 
 * @todo: add more settings, e.g. dimensions for digital image
 * @todo: consider using background color for pattern - already coded, but removed, uncomment to see the result
 * 
 */

import React, { Component } from 'react';
import { Col, Row, Button, Label, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import Toggle from 'react-toggle';

import Mousetrap from 'mousetrap';
import Layouts from 'data/layouts';

import 'rc-slider/assets/index.css';
import './style.css';

// import { CirclePicker } from 'react-color';
// import Products from 'data/products';
// import { Store } from 'service/store';


/*
const colorSwatches = [
    "#f44336", "#e91e63", "#9c27b0", "#673ab7", 
    "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", 
    "#009688", "#4caf50", "#8bc34a", "#cddc39", 
    "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", 
    "#795548", "#607d8b", "#212121", "#ffffff",
    "#fffff1" // this is temp color used to simulate button inside color swatches
];
*/

class OptionsBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blockCount: this.props.options.horizontalCount,
            marginValue: this.props.options.marginValue,
            blackandwhite: this.props.options.blackandwhite,
            chaos: this.props.options.blackandwhite,
            transform: this.props.options.transform,
            color: "transparent",
            freeSide: this.props.options.freeSide,
            freeCount: this.props.options.freeCount,
            counter: 0,
            backCounter: 0,
            resolutionX: 1200,
            resolutionY: 1200,
            lineCount: this.props.options.lineCount
        }
    }

    onBlockSliderChange = (val) => {
        this.setState({ blockCount: val }, () => {
            this.handleOptionsChange();
        });
    }

    onMarginSliderChange = (val) => {
        this.setState({ marginValue: val }, () => {
            this.handleOptionsChange();
        });
    }

    onColorSettingChange = (e) => {
        this.setState({ blackandwhite: e.target.checked }, () => {
            this.handleOptionsChange();
        });
    }

    onChaosSettingChange = (e) => {
        this.setState({ chaos: !e.target.checked }, () => {
            this.handleOptionsChange();
        });
    }

    onTransformSettingChange = (e) => {
        this.setState({ transform: e.target.checked }, () => {
            this.handleOptionsChange();
        });
    }

    onColorPicked = (color, e) => {
        let col;
        if (color.hex === "#fffff1")
            col = "transparent";
        else
            col = color.hex;
        this.setState({ color: col }, () => {
            this.handleOptionsChange();
            console.log(col);
        });
    }

    onFreeSideChange = (val) => {
        this.setState({ freeSide: val }, () => {
            this.handleOptionsChange();
        })
    }

    onFreeCountChange = (val) => {
        this.setState({ freeCount: val }, () => {
            this.handleOptionsChange();
        })
    }

    handleOptionsChange() {
        this.props.handleOptionsChange(this.state);
        console.log(this.state);
    }

    handleClick() {
        this.props.handleRenderClick();
        let x = this.state.counter;
        this.setState({ counter: x + 1 });
    }

    handleFinishedClicked() {
        this.props.handleFinishedClicked();
    }

    handleBackClick = () => {
        let x = this.state.backCounter;
        this.setState({ backCounter: x + 1 });
        let xx = this.state.counter;
        this.setState({ counter: xx - 1 });
        this.props.handleBackClick();
    }

    handleForwardClick = () => {
        let x = this.state.backCounter;
        this.setState({ backCounter: x - 1 });
        this.props.handleForwardClick();
    }

    handleResolutionXChange = (e) => {
        console.log(e.target.value);
        this.setState({
            resolutionX: e.target.value
        })
    }

    handleResolutionYChange = (e) => {
        console.log(e.target.value);
        this.setState({
            resolutionY: e.target.value
        })
    }

    onLineCountChange = (val) => {
        console.log(val);
        this.setState({
            lineCount: val
        }, () => {
            this.handleOptionsChange();
        })
    }

    componentDidMount () {
        Mousetrap.bind(['space','g'], () => {
            let _this = this;
            _this.handleClick();
            return false;
        });
    }

    componentWillUnmount() {
        Mousetrap.unbind(['space','g']);
    }
    
    render() {
        return (
            <Col 
                xs={ this.props.xs } 
                sm={ this.props.sm } 
                xsOffset={ this.props.xsOffset } 
                smOffset={ this.props.smOffset }
                className="sidebar" 
            >
                <div className="sidebar__content">
                    
                    {   
                        (this.props.type === Layouts.Free) &&
                        <Row className="sidebar__block">
                            <p>
                                Počet vzorov:{' '}
                                <Label bsStyle="primary">{this.state.freeCount}</Label>
                            </p>
                            <Slider 
                                min={1}
                                max={12}
                                dots
                                defaultValue={this.state.freeCount}
                                onAfterChange={ this.onFreeCountChange }/>
                        </Row>
                    }

                    {   
                        (this.props.type === Layouts.Free) &&
                        <Row className="sidebar__block">
                            <p>Veľkosť vzoru:{' '}</p>
                            <Slider 
                                min={100}
                                max={200}
                                defaultValue={this.state.freeSide}
                                onAfterChange={ this.onFreeSideChange }/>
                            
                        </Row>
                    }

                    {   
                        (this.props.type === Layouts.Grid) &&
                        <Row className="sidebar__block">
                            <p>
                                Počet blokov:{' '}
                                <Label bsStyle="primary">{this.state.blockCount}x{this.state.blockCount}</Label>
                            </p>
                            <Slider 
                                min={1}
                                max={10}
                                dots
                                defaultValue={this.state.blockCount}
                                onAfterChange={ this.onBlockSliderChange }/>
                            
                        </Row>
                    }

                    {   
                        (this.props.type === Layouts.Grid) &&
                        <Row className="sidebar__block">
                            <p>Medzery medzi blokmi</p>
                            <Slider 
                                min={0}
                                max={9}
                                defaultValue={this.state.marginValue}
                                onAfterChange={ this.onMarginSliderChange }/>
                        </Row>
                    }

                    {
                        /*(this.props.options.productType === Products.Digital) &&
                        <Row className="sidebar__block resolution-picker">
                            <p>Rozlíšenie v pixeloch:{' '}</p>
                            <FormControl
                            type="text"
                            value={this.state.resolutionX}
                            placeholder="Šírka"
                            onChange={this.handleResolutionXChange}
                            />
                            {' ✖ '}
                            <FormControl
                            type="text"
                            value={this.state.resolutionY}
                            placeholder="Výška"
                            onChange={this.handleResolutionYChange}
                            />
                        </Row>*/
                    }

                    {   
                        (this.props.type === Layouts.Lines) &&
                        <Row className="sidebar__block">
                            <p>
                                Počet riadkov:{' '}
                                <Label bsStyle="primary">{this.state.lineCount}</Label>
                            </p>
                            <Slider 
                                min={1}
                                max={10}
                                dots
                                defaultValue={ this.state.lineCount }
                                onAfterChange={ this.onLineCountChange }/>
                        </Row>
                    }

                    <Row className="sidebar__block">
                        <span>Čiernobiele</span>
                        {' '}
                        <Toggle
                            defaultChecked={ this.state.blackandwhite }
                            onChange={ (e) => this.onColorSettingChange(e) } 
                            className="block__toggle pull-right"/>
                    </Row>

                    {/*{   
                        (this.props.type === Layouts.Grid) &&
                        <Row className="sidebar__block">
                            <span>Pravidelne</span>
                            {' '}
                            <Toggle
                                defaultChecked={ this.state.chaos }
                                onChange={ (e) => this.onChaosSettingChange(e) } 
                                className="block__toggle pull-right"/>
                        </Row>
                    }*/}

                    <Row className="sidebar__block">
                        <span>Náhodné otočky</span>
                        {' '}
                        <Toggle
                            defaultChecked={ this.state.transform }
                            onChange={ (e) => this.onTransformSettingChange(e) } 
                            className="block__toggle pull-right"/>
                    </Row>

                    {/* save button */}
                    <OverlayTrigger 
                        placement="left"
                        overlay={ <Tooltip id="id--next--button">Výtvor sa po kliknutí <strong>automaticky uloží</strong> do profilu. Môžeš si ho neskôr znovu objednať alebo upraviť.</Tooltip>}>
                        <Button 
                            bsStyle="default"
                            className="block__button block__button_main" 
                            onClick={ () => this.handleFinishedClicked() }>
                            Uložiť
                        </Button>
                    </OverlayTrigger>

                    {/* generate new pattern button */}
                    <OverlayTrigger 
                        placement="left"
                        overlay={ <Tooltip id="id--generator--button"><strong>Vygeneruje nový vzor.</strong> Namiesto klikania môžeš stlačiť <em>medzerník</em> alebo písmeno <em>g</em>.</Tooltip>}>
                        <Button 
                            bsStyle="primary" 
                            onClick={ () => this.handleClick() }
                            className="button block__button block__button_main">
                            Generuj nový vzor
                        </Button>
                    </OverlayTrigger>
                    <br />

                    <Row className="sidebar__block">
                        <hr className="block__hr" />
                    </Row>

                    {/*link to order page*/}
                    <Row className="sidebar__block text-center">
                        <OverlayTrigger 
                            placement="left"
                            overlay={ <Tooltip id="id--next--button">Na ďalšej stránke je objednávkový formulár na túto parádnu vec. Šup, nakupuj.</Tooltip>}>
                            <Link 
                                className="button block__button block__button_main btn btn-success" 
                                to="/export" 
                                onClick={ () => this.handleFinishedClicked() }>
                                Chcem si to kúpiť
                            </Link>
                        </OverlayTrigger>
                    </Row>

                    <Row className="sidebar__block text-center">
                        <p className="small">
                            Máte nápad na niečo iné?&#8200;
                            <Link to="/contact" onClick={ () => this.handleFinishedClicked() }>Napíšte nám.</Link> 
                            &#8200;Spravíme Vám niečo na mieru.&#8200;<em>Vzor aj softvér.</em>
                        </p>
                    </Row>
                    
                </div>
            </Col>         
        );
    }
}

export default OptionsBar;