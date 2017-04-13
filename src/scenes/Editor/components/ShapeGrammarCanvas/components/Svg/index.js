import React, { Component } from 'react';

class Svg extends Component {

    render() {
        const {data, ...rest} = this.props;
        return (
           <svg {...rest }>
                { data }
            </svg>
        );
    }
}

Svg.defaultProps = {
    version: "1.1",
    baseProfile: "full",
    width: "200",
    height: "200",
    xmlns: "http://www.w3.org/2000/svg"
};

export default Svg;