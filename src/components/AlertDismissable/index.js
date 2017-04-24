import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

import './style.css';

class AlertDismissable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            alertVisible: true
        }
    }

    onDismiss() {
        this.setState({
            alertVisible: false
        })
    }

    render() {
        if (this.props.show && this.state.alertVisible)
            return (
                <Alert onClick={ (e) => this.onDismiss() } bsStyle={ this.props.type } onDismiss={ () => this.onDismiss() } className="page__alert card-1">
                    {this.props.message}
                </Alert>
            );
        else
            return null;
    }
}

export default AlertDismissable;