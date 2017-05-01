import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Button, Alert } from 'react-bootstrap';
import Auth from 'service/auth';
import { Redirect } from 'react-router-dom';

import './style.css';
import '../style.css';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class Login extends Component {

    constructor() {
        super();
        this.state = {
            userName: "",
            password: "",
            isLoggedIn: Auth.isLoggedIn(),
            alertVisible: true
        }
    }

    handleUsernameChange = (e) => {
        this.setState({
            userName: e.target.value,
            // failedAuth: false
        })
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value,
            // failedAuth: false
        })
    }

    handleClick = () => {
        this.setState({ 
            isLoggedIn: Auth.login(this.state.userName, this.state.password),
            failedAuth: true,
            alertVisible: true
        });
    }

    handleAlertDismiss = () => {
        this.setState({ alertVisible: false });
    }

    render() {
        return (
            <div className="wrapper">
                <Grid className="page-content" fluid>
                    {
                        this.state.isLoggedIn ?
                        <Redirect to={ history.go(-1) } /> :
                        <Row>
                            <Col xs={12}>
                                <h1 className="text block__headline block__headline_h1">Prihlásiť. Seba sa.</h1>
                                <p className="text text__block">Prihlás sa cez svoj účet. Po prihlásení sa tvoje výtvory samé ukladajú do profilu a máš ich vždy po ruke. To dá rozum.</p>
                                <p className="text text__block">
                                    <em>Toto je len prototyp prihlasovania. Pre testovacie účely použi meno <strong>john.doe</strong> a heslo <strong>123</strong>. Vďaka za pochopenie.</em>
                                </p>
                            </Col>
                            <Col xs={12}>
                                {
                                    this.state.alertVisible && 
                                    this.state.failedAuth &&
                                    <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss} className="text">
                                      <strong>Ľaľa!</strong> Nedobre si zadal meno či heslo.
                                    </Alert>
                                }
                                
                                <form className="form form_login">
                                    <FieldGroup
                                        id="formControlsText"
                                        type="text"
                                        label="Nože, predstav sa"
                                        placeholder="Meno"
                                        value={this.state.userName} 
                                        onChange={this.handleUsernameChange} />
                                    <FieldGroup
                                        id="formControlsPassword"
                                        label="A heslo..."
                                        type="password" 
                                        placeholder="Heslo"
                                        value={this.state.password} 
                                        onChange={this.handlePasswordChange} />
                                    <div className="text-center">
                                        <Button onClick={ this.handleClick } className="button block__button btn btn-primary">
                                            Prihlásiť
                                        </Button>
                                    </div>
                                </form>
                            </Col>
                        </Row>
                    }
                </Grid>
            </div>
        );
    }
}

export default Login;