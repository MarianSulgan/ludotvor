/**
 * @todo: image urls data retrieval, not only sample, connect to store or something
 */
import React, { Component } from 'react';
import ReactElementToString from 'react-element-to-string';

// import Svg from './components/Svg';
import './style.css';
// import images
import bagImage from './images/bag.jpg';
// import tshirtImage from './images/tshirt.jpg';
// import phoneImage from './images/phone.jpg';

import Products from '../../data/products.js';

class Canvas extends Component {

    render() {
        const { patternUrl, productType } = this.props;
        
        let productImageUrl = "";
        
        switch (productType) {
            case Products.Bag: 
                productImageUrl = bagImage; 
                break;
            default: 
                productImageUrl = "";
        }

        // get image urls
        // let dataToEncode = ReactElementToString(patternData);
        // let svgImageUrl = 'data:image/svg+xml;base64,' + window.btoa(dataToEncode);

        const canvas__layer_product__style = {
            backgroundImage: 'url(' + productImageUrl + ')'
        };
        const canvas__layer_svg__style = {
            backgroundImage: 'url(' + patternUrl + ')'
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
