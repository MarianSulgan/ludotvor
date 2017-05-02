import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

// import './style.css';

class SizeButton extends Component {
    
    constructor() {
        super();
        this.state = {
            selected: false
        }
    }

    handleClick = () => {
        this.props.handleSizeClick(this.props.size);
    }
    
    render() {
        return (
            <Button 
                onClick={ this.handleClick }
                bsStyle={ this.props.selected === this.props.size ? "primary" : "default" } >
                { this.props.size }
            </Button>
        );
    }
}

export default SizeButton;