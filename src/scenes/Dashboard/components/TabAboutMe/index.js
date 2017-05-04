/**
 * Tab with user account info
 * Including address (to ship orders to)
 */

import React, { Component } from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button, HelpBlock, Alert, Form } from 'react-bootstrap';
import Auth from 'service/auth';

class TabAboutMe extends Component {

    constructor() {
        super();
        let user = Auth.getCurrentUser();
        this.state = {
            name: user.name,
            email: user.email,
            password: user.password,
            street: user.address.streetAddress,
            postalCode: user.address.postalCode,
            city: user.address.city,
            state: user.address.state,
            alertVisible: false,
            enableButton: false
        }
    }

    handleClick = () => {
        this.setState({
            alertVisible: true
        });
        window.scrollTo(0, 0);
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value,
            enableButton: true
        });
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value,
            enableButton: true
        });
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value,
            enableButton: true
        });
    }

    handleStreetChange = (e) => {
        this.setState({
            street: e.target.value,
            enableButton: true
        });
    }

    handlePostalCodeChange = (e) => {
        this.setState({
            postalCode: e.target.value,
            enableButton: true
        });
    }

    handleCityChange = (e) => {
        this.setState({
            city: e.target.value,
            enableButton: true
        });
    }

    handleStateChange = (e) => {
        this.setState({
            state: e.target.value,
            enableButton: true
        });
    }

    handleAlertDismiss = () => {
        this.setState({ 
            alertVisible: false
        });
    }

    getEmailValidationState() {
        if (this.state.email.length === 0) return null;
        return (validateEmail(this.state.email) ? null : 'error');
    }
    
    render() {
        return (
            <div className="tab__content content_3">
                <Row>
                    {
                    this.state.alertVisible &&
                    <Alert bsStyle="success" onDismiss={this.handleAlertDismiss} className="text">
                        <strong>Uložené!</strong> Všetky zmeny sa úspešne uložili.
                    </Alert> 
                    }
                    <h2 className="text block__headline block__headline_h2">Účet</h2>
                    <p className="text block__text">
                        Pomocou týchto údajov sa prihlasuješ. Meň opatrne!
                    </p>
                    <Form horizontal className="form form_dashboard text" onSubmit={ this.onSubmit }>
                        <FieldGroup
                            type="text"
                            label="Meno"
                            placeholder="Celé meno"
                            value={ this.state.name }
                            onChange={ this.handleNameChange }
                            sm={2} 
                        />
                        <FieldGroup
                            id="formControlsEmail"
                            type="email"
                            label="E-mail"
                            placeholder="tvoj.email@email.sk"
                            value={ this.state.email }
                            onChange={ this.handleEmailChange }
                            validationState={this.getEmailValidationState()}
                            sm={2}
                        />
                        <FieldGroup
                            type="password"
                            label="Heslo"
                            placeholder="Heslo"
                            value={ this.state.password }
                            onChange={ this.handlePasswordChange }
                            sm={2}
                        />
                    </Form>
                    <h2 className="text block__headline block__headline_h2">Adresa</h2>
                    <p className="text block__text">
                        Na túto adresu ti príde balíček s objednávkou.
                    </p>
                    <Form horizontal className="form form_dashboard text" onSubmit={ this.onSubmit }>
                        <FieldGroup
                            type="text"
                            label="Ulica"
                            placeholder="Ulica a číslo domu"
                            value={ this.state.street }
                            onChange={ this.handleStreetChange }
                            sm={2} 
                        />
                        <FieldGroup
                            type="text"
                            label="PSČ"
                            placeholder="Poštové smerovacie číslo"
                            value={ this.state.postalCode }
                            onChange={ this.handlePostalCodeChange }
                            sm={2} 
                        />
                        <FieldGroup
                            type="text"
                            label="Mesto"
                            placeholder="Mesto"
                            value={ this.state.city }
                            onChange={ this.handleCityChange }
                            sm={2} 
                        />
                        <FieldGroup
                            type="text"
                            label="Štát"
                            placeholder="Štát"
                            value={ this.state.state }
                            onChange={ this.handleStateChange }
                            sm={2} 
                        />
                    </Form>
                </Row>
                <Row>
                    <Col xs={12} className="block text-center">
                        <Button 
                            bsStyle="primary" 
                            onClick={ this.handleClick } 
                            className="button block__button" 
                            disabled={ !this.state.enableButton }>
                            Uložiť
                        </Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

function FieldGroup({ id, label, help, validationState, sm, ...props }) {
  return (
      <FormGroup
          controlId={id}
          validationState={validationState}>
          <Col componentClass={ControlLabel} sm={sm}>{label}</Col>
          <Col sm={12 - sm}>
              <FormControl {...props} />
              <FormControl.Feedback />
          </Col>
          {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
  );
}

function validateEmail(email) {
    // eslint-disable-next-line
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export default TabAboutMe;