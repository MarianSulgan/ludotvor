/**
 * Class Canvas for displaying SVG data
 * 
 * It is used to display actual result pattern, generated.
 * It has 3 props:
 * - patternData -> JSX element with svg content
 * - patternUrl -> _DEPRECATED_ url of pattern (svg format)
 * - productType -> type of product for pattern to be displayed on
 * 
 */

import React, { Component } from 'react';
// import ReactElementToString from 'react-element-to-string';

import SvgWrapper from './components/SvgWrapper';
import Products from 'data/products';

import bagImage from './images/bag.png';
import tshirtImage from './images/tshirt.png';

import './style.css';

class Canvas extends Component {

    render() {

        const { productType, patternData } = this.props;

        /**
         * patternData is structure containig:
         * 
         * (patternData.) staticSvgs[] -- array of actual svgs that are used in shapeContainers
         * (patternData.) shapeContainers[] -- array of shape containers, that contains:
         * -> index (int, identifier of ornament in actualSvgs[])
         * -> shapeId (string, identifier of ornament in global scope)
         * -> transforms (empty string, transformations)
         * -> position (coordinates of left top corner of shape in format {x, y}
         */

        // Create components for each element from shapeContainer with SVG content

        let svgDataElement;
        if (patternData) {
            const _svgDataElement = patternData.shapeContainers.map((elem, index) =>            
                <g key={ index } transform={ elem.transforms }  dangerouslySetInnerHTML={{ __html: patternData.staticSvgs[elem.index] }} />
            );
            svgDataElement = _svgDataElement;
        }

        // const attr = { 
        //     version:"1.1",
        //     baseProfile:"full",
        //     xmlns:"http://www.w3.org/2000/svg"
        // }
        // const tempComponent = React.createElement('svg', attr, svgDataElement);
        // const svgDataString = ReactElementToString(tempComponent);

        let productImageUrl, productClass;

        switch (productType) {
            case Products.Bag: 
                productImageUrl = bagImage;
                productClass = "product__bag";
                break;
            case Products.Tshirt: 
                productImageUrl = tshirtImage; 
                productClass = "product__tshirt";
                break;
            case Products.Digital: 
                // productImageUrl = digitalImage; 
                productClass = "product__digital";
                break;
            default: 
                productImageUrl = "";
        }

        const canvas__layer_product__style = 
        (productType === Products.Digital) ? {} : { backgroundImage: 'url(' + productImageUrl + ')' };

        return (
            <div className={`canvas canvas_editor ${productClass}`}>
                <div style={ canvas__layer_product__style } className="canvas__layer canvas__layer_product"></div>
                <div className="canvas__layer canvas__layer_svg">
                    <SvgWrapper 
                        content={ svgDataElement } 
                        width={ this.props.width } 
                        height={ this.props.height } />
                </div>
            </div>
        );
    }
}

export default Canvas;


