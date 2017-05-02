/**
 * Page with user dashboard
 * 
 * Available only to logged in users.
 * Contains 3 tabs with following content:
 * - address (shipping)
 * - orders
 * - patterns
 */

import React, { Component } from 'react';
import { Grid, Row, Col, Tab, Tabs} from 'react-bootstrap';
import Lorem from 'react-lorem-component';
import Auth from 'service/auth';
import { Redirect } from 'react-router-dom';

import TabAboutMe from './components/TabAboutMe';

import './style.css';

class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            key: 1,
        }
    }

    handleSelect = (key) => {
        this.setState({ key: key });
    }

    onSubmit = (e) => {
        e.preventDefault();
        return false;
    }

    render() {

        return (
            <div className="wrapper">
                { 
                    Auth.isLoggedIn() ?
                    <Grid className="page-content">

                        <Row>
                            <Col xs={12} className="block">
                                <h1 className="text block__headline block__headline_h1">Moje výtvory a vôbec</h1>
                                <p className="text block__text">
                                    Na tomto mieste nájdeš všetky svoje predchádzajúce výtvory 
                                    aj objednávky. A nejaké tie informácie, napríklad, že 
                                    kam poslať vecičky, ktoré si objednáš.
                                </p>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12}>
                                <Tabs 
                                    activeKey={this.state.key} 
                                    onSelect={this.handleSelect} 
                                    id="controlled-tab-1"
                                    animation={ false }
                                    bsStyle="pills" 
                                    className="tabs">

                                    <Tab eventKey={1} title="Výtvory" className="tab">
                                        <div className="tab__content">
                                            <Lorem seed={1} className="text block__text"/>
                                        </div>
                                    </Tab>

                                    <Tab eventKey={2} title="Objednávky" className="tab">
                                        <div className="tab__content">
                                            <Lorem seed={2} className="text block__text"/>
                                        </div>
                                    </Tab>

                                    <Tab eventKey={3} title="O mne" className="tab">
                                        <TabAboutMe />
                                    </Tab>

                                </Tabs>
                            </Col>
                        </Row>

                        

                    </Grid> :
                    <Redirect to="/login" />
                }
            </div>
        );
    }
}

export default Dashboard;