import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

import './style.css';

class ImageWithIcon extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isActive: this.props.isActive
        }
    }

    componentWillMount() {
        this.setState({ isActive: this.props.isActive });
    }

    handleClick(e) {
        if (this.props.handleClick(this.props.ornamentId, !this.state.isActive)) {
            this.setState({
                isActive: !this.state.isActive
            });
        }
    }

    isActive(value) {
        return this.state.isActive;
    }
    
    render() {
        return(
            <span className={`pattern-item ${this.state.isActive ? 'has-check' : ''}`} onClick={ (e) => this.handleClick(e) }>
                <Image className="image image_ornament" src={ this.props.src } responsive />
            </span>
        );
    }
}

export default ImageWithIcon