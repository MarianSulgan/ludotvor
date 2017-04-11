import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

import './style.css';

class ImageWithIcon extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
    }

    componentWillMount() {
        this.setState({ isActive: false });
    }

    handleClick(e) {
        this.setState({
            isActive: !this.state.isActive
        });
    }

    isActive(value) {
        return this.state.isActive;
    }
    
    render() {

        const imgStyle = {
            padding: 10 + 'px',
            float: 'left'
        }

        return(
            <span {...this.props} className={`pattern-item ${this.state.isActive ? 'has-check' : ''}`} onClick={ (e) => this.handleClick(e) }>
                <Image style={ imgStyle } src="http://placehold.it/60x60" responsive />
            </span>
        );
    }
}

export default ImageWithIcon