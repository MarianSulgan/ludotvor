import React, { Component } from 'react';
import './style.css';

class SvgWrapper extends Component {
    render() {
        let a, b, c, d;
        a = b = -this.props.patternBorderSize;
        c = d = this.props.width + 2 * this.props.patternBorderSize;
        return(
            <svg 
                version="1.1"
                baseProfile="full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`${a} ${b} ${c} ${d}`}
                preserveAspectRatio="xMaxYMax meet"
                className="layer__svg"
                width={`${this.props.width}`}
                height={`${this.props.height}`}>
                <rect width="100%" height="100%" x={ a } y={ b } fill={`${this.props.backgroundColor }`}></rect>
                {this.props.content}
            </svg>
        );
    }       
}

export default SvgWrapper;