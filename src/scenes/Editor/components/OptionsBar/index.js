/**
 * Sidebar with options in Editor page
 */

import React, { Component } from 'react';
import { Col, Row, Button, Label, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Toggle from 'react-toggle';
// import { CirclePicker } from 'react-color';
// import FontAwesome from 'react-fontawesome';
import Mousetrap from 'mousetrap';

import Layouts from 'data/layouts';
// import Products from 'data/products';
// import { Store } from 'service/store';
import './style.css';

// const colorSwatches = [
//     "#f44336", "#e91e63", "#9c27b0", "#673ab7", 
//     "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", 
//     "#009688", "#4caf50", "#8bc34a", "#cddc39", 
//     "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", 
//     "#795548", "#607d8b", "#212121", "#ffffff",
//     "#fffff1" // this is temp color used to simulate button inside color swatches
// ];

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
            backCounter: 0
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
            // this.handleOptionsChange();
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
        // console.log("options changed");
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
            <Col xs={ this.props.xs } sm={ this.props.sm } className="sidebar" >

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
                            max={400}
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

                {/*<Row className="sidebar__block">
                    <h4>Produkty</h4>
                    <p>Zmeniť produkt</p>
                </Row>*/}

                <Row className="sidebar__block">
                    <span>Čiernobiele</span>
                    {' '}
                    <Toggle
                        defaultChecked={ this.state.blackandwhite }
                        onChange={ (e) => this.onColorSettingChange(e) } 
                        className="block__toggle pull-right"/>
                </Row>

                {   
                    (this.props.type === Layouts.Grid) &&
                    <Row className="sidebar__block">
                        <span>Pravidelne</span>
                        {' '}
                        <Toggle
                            defaultChecked={ this.state.chaos }
                            onChange={ (e) => this.onChaosSettingChange(e) } 
                            className="block__toggle pull-right"/>
                    </Row>
                }

                <Row className="sidebar__block">
                    <span>Transformácie</span>
                    {' '}
                    <Toggle
                        defaultChecked={ this.state.transform }
                        onChange={ (e) => this.onTransformSettingChange(e) } 
                        className="block__toggle pull-right"/>
                </Row>

                {/*{
                    (this.props.type === Layouts.Grid) &&  
                    <Row className="sidebar__block">
                        <p>Farba pozadia</p>
                        <CirclePicker
                            onChangeComplete={ this.onColorPicked }
                            color={ this.state.color }
                            colors={ colorSwatches }/>
                    </Row>
                }*/}

                <Row className="sidebar__block text-center">
                    
                    {/*<Button bsStyle="default" className="button block__button" disabled={ this.state.counter === 0 } onClick={ this.handleBackClick }>
                        <FontAwesome name="undo" />
                        {' '} Späť
                    </Button>*/}

                    {/*{' '}
                    <Button bsStyle="default" className="button block__button" disabled={ this.state.backCounter === 0 } onClick={ this.handleForwardClick }>
                        Dopredu{' '}<FontAwesome name="arrow-right" />
                    </Button>*/}
                    <br />
                    <OverlayTrigger 
                        placement="left"
                        overlay={ <Tooltip id="id--generator--button">Namiesto klikania môžeš stlačiť <em>medzerník</em> alebo písmeno <em>g</em>.</Tooltip>}>
                        <Button 
                            bsStyle="primary" 
                            onClick={ () => this.handleClick() }
                            className="block__button block__button_main">
                            Generuj nový vzor
                        </Button>
                    </OverlayTrigger>
                    <br />
                    {/*next page button, save, buy, export*/}
                    <OverlayTrigger 
                        placement="left"
                        overlay={ <Tooltip id="id--next--button">Výtvor sa po kliknutí <strong>automaticky uloží</strong> do profilu. Môžeš si ho neskôr znovu objednať alebo upraviť.</Tooltip>}>
                        <Link 
                            className="block__button block__button_main btn btn-success" 
                            to="/export" 
                            onClick={ () => this.handleFinishedClicked() }>
                            Uložiť a ďalej!
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
            </Col>         
        );
    }
}

export default OptionsBar;