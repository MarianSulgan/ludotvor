/**
 * Class Canvas for displaying SVG data
 * 
 * It is used to display actual result pattern, generated.
 * It has 3 props:
 * - patternData -> JSX element with svg content
 * - patternUrl -> url of pattern (svg format)
 * - productType -> type of product for pattern to be displayed on
 * 
 * @todo: image urls data retrieval, not only sample, connect to store or something
 * @todo: uninstall jsx-to-string
 * 
 */

import React, { Component } from 'react';
import ReactElementToString from 'react-element-to-string';
import jsxToString from 'jsx-to-string';

import Svg from './components/Svg';
import './style.css';

// import images
import bagImage from './images/bag.jpg';
// import tshirtImage from './images/tshirt.jpg';
// import phoneImage from './images/phone.jpg';

import Products from '../../data/products.js';

class Canvas extends Component {

    render() {

        const { patternUrl, productType, patternData } = this.props;

        // patternData is structure containig:
        // (patternData.) staticSvgs[] -- array of actual svgs that are used in shapeContainers
        // (patternData.) shapeContainers[] -- array of shape containers, that contains:
        //      -> index (int, identifier of ornament in actualSvgs[])
        //      -> shapeId (string, identifier of ornament in global scope)
        //      -> transforms (empty string, transformations)
        //      -> position (coordinates of left top corner of shape in format {x, y}


        // Generate string from data

        // 1. create components for each element from shapeContainer with SVG content (use map func???)
        let svgDataElement;
        if (patternData) {
            const _svgDataElement = patternData.shapeContainers.map((elem, index) =>            
                
                
                <g key={ index } transform={ elem.transforms }  dangerouslySetInnerHTML={{ __html: patternData.staticSvgs[elem.index] }}>
                </g>,
                {/*<g key={ index } transform={ elem.transforms }>
                    { patternData.staticSvgs[elem.index] }
                </g>*/},
            );
            svgDataElement = _svgDataElement;
        }

        {/*<Svg 
            key={ index }
            content={ patternData.staticSvgs[elem.index] }
            transforms={ elem.transforms } 
            position={ elem.position } />
        */}

        // 2. set positions to svg elements

        // 3. apply transformations to svg elements

        // 4. group them to one component (or solve earlier...)

        // 5. continue below with converting to string and respectively to Data URI
        const attr = { 
            version:"1.1",
            baseProfile:"full",
            xmlns:"http://www.w3.org/2000/svg"
        }
        const tempComponent = React.createElement('svg', attr, svgDataElement);
        const svgDataString = ReactElementToString(tempComponent);
        console.log(svgDataString);

        let productImageUrl = "";

        switch (productType) {
            case Products.Bag: 
                productImageUrl = bagImage; 
                break;
            default: 
                productImageUrl = "";
        }

        const url = patternData ? 
                'data:image/svg+xml;base64,' + window.btoa(svgDataString) : 
                patternUrl;

        // const url = "";

        const canvas__layer_product__style = {
            backgroundImage: 'url(' + productImageUrl + ')'
        };

        const canvas__layer_svg__style = {
            backgroundImage: 'url(' + url + ')'
        }

         const style = {
            width: "100%",
            position: "absolute",
            maxWidth: "770px",
            minWidth: "450px",
            bottom: "50px"
        }

        return (
           
            <div className="canvas canvas_editor">
                <div style={canvas__layer_product__style} className="canvas__layer canvas__layer_product"></div>
                {/*<div style={canvas__layer_svg__style} className="canvas__layer canvas__layer_svg"></div>*/}
                <div style={ style }>
                    <SvgWrapper content={ svgDataElement } />
                </div>
            </div>
        );
    }
}

export default Canvas;

class SvgWrapper extends Component {
    render() {
        const style = {

        }
        return(
            <svg 
                version="1.1"
                baseProfile="full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 800"
                width="100%"
                style={ style }>
                {this.props.content}
            </svg>
        );
    }       
}
