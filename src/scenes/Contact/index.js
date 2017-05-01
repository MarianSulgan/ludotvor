import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button, HelpBlock, Alert } from 'react-bootstrap';
import Mousetrap from 'mousetrap';

import './style.css';
import '../style.css';

class Contact extends Component {

    constructor() {
        super()
        this.state = {
            step: 0,
            name: "",
            email: "",
            phone: "",
            message: "",
            sent: false,
            alertVisible: true
        }
    }

    componentDidMount () {
        Mousetrap.bind(['enter', 'space'], () => {
            // let _this = this;
            this.handleClick();
            return false;
        });
    }

    handleClick = () => {
        if (this.state.step < this.steps.length - 1) {
            this.setState({
                step: this.state.step + 1
            })
        } else if (this.state.step === this.steps.length - 1) {
            // send message
            console.log(this.state);
            this.setState({ sent: true });
        }
    }

    handleBackClick = () => {
        if (this.state.step > 0) {
            this.setState({
                step: this.state.step - 1
            })
        }
    }

    onNameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    onEmailChange = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    onPhoneChange = (e) => {
        this.setState({
            phone: e.target.value
        });
    }

    onMessageChange = (e) => {
        this.setState({
            message: e.target.value
        });
    }

    getNameValidationState() {
      const length = this.state.name.length;
      if (length > 5) return 'success';
      else if (length > 1) return 'warning';
      else if (length === 1) return 'error';
    }

    getEmailValidationState() {
        if (this.state.email.length === 0) return;
        return (validateEmail(this.state.email) ? 'success' : 'error');
    }

    getPhoneValidationState() {
        return (validatePhone(this.state.phone) ? 'success' : 'error');
    }

    getMessageValidationState() {
      const length = this.state.message.length;
      if (length > 10) return 'success';
      else if (length > 1) return 'warning';
      else if (length === 1) return 'error';
    }

    isDisabled = () => {
        if (this.state.step === 0 && this.state.name === "")
            return true;
        if (this.state.step === 1 && this.state.email === "")
            return true;
        if (this.state.step === 3 && this.state.message === "")
            return true;
        return false;
    }

    onSubmit = (e) => {
        e.preventDefault();
        return false;
    }

    handleAlertDismiss = () => {
        this.setState({ 
            step: 0,
            name: "",
            email: "",
            phone: "",
            message: "",
            sent: false,
            alertVisible: true
        });
    }

    render() {
        const steps = this.steps = [
            <FieldGroup
              id="formControlsName"
              type="text"
              label="Ctené meno, prosím"
              placeholder="Meno a možno aj priezvisko"
              validationState={this.getNameValidationState()}
              value={ this.state.name }
              onChange={ this.onNameChange }
            />,
            <FieldGroup
              id="formControlsEmail"
              type="email"
              label="Adresa elektronickej pošty"
              placeholder="Šak e-mail"
              validationState={this.getEmailValidationState()}
              value={ this.state.email }
              onChange={ this.onEmailChange }
            />,
            <FieldGroup
              id="formControlsPhone"
              type="tel"
              label="Číslo topánky. Teda, stačí aj telefónne."
              placeholder="Telefón"
              validationState={this.getPhoneValidationState()}
              value={ this.state.phone }
              onChange={ this.onPhoneChange }
            />,
            <FormGroup 
                controlId="formControlsMessageArea"
                validationState={this.getMessageValidationState()} >
                <ControlLabel>Správa. Akože, o čo ide a tak.</ControlLabel>
                <FormControl 
                    componentClass="textarea" 
                    placeholder="Sem napíš svoje myšlienky, prosím."
                    value={ this.state.message }
                    onChange={ this.onMessageChange } />
                <FormControl.Feedback />
            </FormGroup>
        ];
        return (
            <div className="wrapper">
                <Grid className="page-content">
                    <Row>
                        <Col xs={12} className="block">
                            <h1 className="text block__headline block__headline_h1">Kontakt</h1>
                            <p className="text block__text">
                                Máš nápad? Chceš, aby sme pridali nový vzor? Nebodaj sa nejaká chyba objavila? Neokúňaj sa a ozvi sa. Spravíme, vymyslíme a určite odpíšeme!
                            </p>
                            { 
                                this.state.sent ?
                                (
                                    this.state.alertVisible &&
                                    <Alert bsStyle="success" onDismiss={this.handleAlertDismiss} className="text">
                                        <strong>Tadá!</strong> Správu už nesú poštové holuby.
                                    </Alert> 
                                 ) :
                                <form className="form text" onSubmit={ this.onSubmit }>
                                    <span className="form__counter pull-right">{ this.state.step + 1}/{ steps.length }</span>
                                    { steps[this.state.step] }
                                </form>
                            }
                        </Col>
                    </Row>
                    {
                        this.state.sent ||
                        <Row>
                            <Col xs={12} className="block text-center">
                                <Button bsStyle="default" onClick={ this.handleBackClick } className="button block__button" disabled={ this.state.step === 0 }>
                                    Späť
                                </Button>
                                {' '}
                                <Button bsStyle="primary" onClick={ this.handleClick } className="button block__button" disabled={ this.isDisabled() }>
                                    { this.state.step === steps.length - 1 ? "Odoslať" : "Ďalej" }
                                </Button>
                            </Col>
                        </Row>
                    }
                </Grid>
            </div>
        );
    }
}

function FieldGroup({ id, label, help, validationState, ...props }) {
  return (
    <FormGroup 
        controlId={ id }
        validationState={ validationState }>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
      <FormControl.Feedback />
    </FormGroup>
  );
}

function validateEmail(email) {
    // eslint-disable-next-line
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validatePhone(phone) {
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if(phone.match(phoneno))
    return true;
  else
    return false;
}

export default Contact;