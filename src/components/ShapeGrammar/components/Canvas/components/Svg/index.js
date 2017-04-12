import React, { Component } from 'react';

class Svg extends Component {
    render() {
        const {data, ...rest} = this.props;
        return (
            <svg { ...rest }>
                { data }
            </svg>
        );
    }
}

export default Svg;