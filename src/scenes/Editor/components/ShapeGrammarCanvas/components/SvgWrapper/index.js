import React, { Component } from 'react';
import './style.css';

class SvgWrapper extends Component {
    render() {
        return(
            <svg 
                version="1.1"
                baseProfile="full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 ${this.props.width} ${this.props.width}`}
                preserveAspectRatio="xMaxYMax meet"
                className="layer__svg"
                width={`${this.props.width}`}
                height={`${this.props.height}`}>
                {this.props.content}
            </svg>
        );
    }       
}

export default SvgWrapper;