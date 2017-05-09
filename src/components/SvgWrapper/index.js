import React, { Component } from 'react';

import Layouts from 'data/layouts';
import './style.css';

class SvgWrapper extends Component {
    
    render() {
        
        let a, b, c, d;
        let w = "100%", h = "100%"

        if (this.props.layoutType === Layouts.Grid) {

            a = -this.props.patternBorderSize;
            b = -this.props.patternBorderSize;
            c = this.props.width + 2 * this.props.patternBorderSize;
            d = this.props.width + 2 * this.props.patternBorderSize;

        } else if (this.props.layoutType === Layouts.Free) {

            a = b = this.props.patternBorderSize;
            c = this.props.width + this.props.patternBorderSize;
            d = this.props.height + this.props.patternBorderSize;

        } else if (this.props.layoutType === Layouts.Lines) {

            a = 0;
            b = 0;
            c = this.props.width;
            d = this.props.height;
            w = this.props.width;
            h = this.props.height;

        } else {
            a = 0;
            b = 0;
            c = this.props.width;
            d = this.props.height;
        }

        return(
            <svg 
                version="1.1"
                baseProfile="full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`${a} ${b} ${c} ${d}`}
                preserveAspectRatio="xMaxYMax meet"
                className={`layer__svg ${this.props.className}`}
                width={ w }
                height={ h }
            >
                <filter xmlns="http://www.w3.org/2000/svg" id="grayscale">
                     <feColorMatrix type="saturate" values="0"/>
                </filter>
                <rect width="100%" height="100%" x={ a } y={ b } fill={`${this.props.backgroundColor }`}></rect>
                {this.props.content}
            </svg>
        );
    }       
}

export default SvgWrapper;