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
import { Grid, Row, Col, Tab, Tabs } from 'react-bootstrap';
import Auth from 'service/auth';
import { Redirect } from 'react-router-dom';

import TabAboutMe from './components/TabAboutMe';
import ArtworkAndProduct from 'components/ArtworkAndProduct';
import { Store } from 'service/store';
import Products from 'data/products';
import Layouts from 'data/layouts';
import OrderItem from 'components/OrderItem';

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

    handleDeleteAll = () => {
        Store.remove("user.created");
        this.setState({});
    }

    render() {

        // parse usefull data from storage and map to items
        let data = Store.getArr("user.created");
        let createdItems;
        if (data && data.length > 0) {
            createdItems = data.map((elem, index) => (
                <ArtworkAndProduct 
                    key={ index }
                    idKey={ index }
                    product={ elem.productType }
                    pattern={ elem.patternData } 
                    layout={ elem.options.layoutType }
                    className={`${Products.toString(elem.productType)} ${Layouts.toString(elem.options.layoutType)}`}
                    options={ elem.options }
                    isLink
                />
            ));
        }

        // parse ordered items from storage and map to components
        let orders = Store.getArr("user.orders");
        let orderedItems;
        if (orders && orders.length > 0) {
            orderedItems = orders.map((elem, index) => (
                <OrderItem 
                    key={ index }
                    idKey={ index }
                    product={ elem.productType }
                    pattern={ elem.patternData } 
                    layout={ elem.options.layoutType }
                    className={`${Products.toString(elem.productType)} ${Layouts.toString(elem.options.layoutType)}`}
                    options={ elem.options }
                    orderData={ elem.orderData }
                    isLink
                />
            ));
        }

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
                                    className="tabs tabs_dashboard">

                                    <Tab eventKey={1} title="Výtvory" className="tab" role="button">
                                        <div className="tab__content content_1">
                                            { /* display previously created artworks + products */ }
                                            { createdItems }
                                        </div>
                                        
                                    </Tab>

                                    <Tab eventKey={2} title="Objednávky" className="tab">
                                        <div className="tab__content content_2 orders">
                                            {/*ordered items*/}
                                            { orderedItems }
                                        </div>
                                    </Tab>

                                    <Tab eventKey={3} title="O mne" className="tab">
                                        <TabAboutMe />
                                    </Tab>

                                </Tabs>
                            </Col>
                        </Row>
                        {
                            (data && data.length > 0 && this.state.key === 1) ?
                            <div className="container_delete-button text-center">
                                <span
                                    className="btn btn-secondary button block__button button_delete"
                                    onClick={ this.handleDeleteAll }>
                                    Zmazať všetky výtvory :(
                                </span>
                            </div>:
                            null
                        }
                    </Grid> :

                    <Redirect to="/login" />
                }
            </div>
        );
    }
}

export default Dashboard;