import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Grid, Row } from 'react-bootstrap';

import './style.css';
import '../style.css';

class Login extends Component {
    state = {  }
    render() {
        return (
            <div>
                <Grid className="page-content" fluid>
                    <Row className="block">
                        <h1 className="text block__headline block__headline_h1">Prihlásenie. Seba sa.</h1>
                        <p className="text text__block">Prihlás sa cez jeden z účtov. Po prihlásení sa tvoje výtvory samé ukladajú do profilu a máš ich vždy po ruke. To dá rozum.</p>
                    </Row>
                    <Row>
                        <div className="block text-center">
                            <FontAwesome className="block__social-icon" name='facebook' size="4x" />
                            <FontAwesome className="block__social-icon" name='twitter' size="4x" />
                            <FontAwesome className="block__social-icon" name='google' size="4x" />
                        </div>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Login;