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
        // actualSvgs[] -- array of actual svgs that are used in shapeContainers
        // shapeContainers[] -- array of shape containers, that contains:
        //      -> index (string, identifier of ornament)
        //      -> shapeId (string)
        //      -> transforms (empty string, transformations)
        //      -> position (coordinates of left top cornenr of shape in format {x, y}

        // Generate string from data

        // 1. create components for each element from shapeContainer with SVG content (use map func???)

        // 2. set positions to svg elements

        // 3. apply transformations to svg elements

        // 4. group them to one component (or solve earlier...)

        // 5. continue below with converting to string and respectively to Data URI

        let productImageUrl = "";

        switch (productType) {
            case Products.Bag: 
                productImageUrl = bagImage; 
                break;
            default: 
                productImageUrl = "";
        }

        // const url = patternData ? 
        //         'data:image/svg+xml;base64,' + window.btoa(ReactElementToString(patternData)) : 
        //         patternUrl;

        const url = "";

        const canvas__layer_product__style = {
            backgroundImage: 'url(' + productImageUrl + ')'
        };

        const canvas__layer_svg__style = {
            backgroundImage: 'url(' + url + ')'
        }

        return (
            <div className="canvas canvas_editor">
                <div style={canvas__layer_product__style} className="canvas__layer canvas__layer_product"></div>
                <div style={canvas__layer_svg__style} className="canvas__layer canvas__layer_svg"></div>
            </div>
        );
    }
}

export default Canvas;
