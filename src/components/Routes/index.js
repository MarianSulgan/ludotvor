/**
 * App container with navigation, handling routing
 */

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from '../../scenes/Home';
import About from '../../scenes/About';
import Contact from '../../scenes/Contact';
import Login from '../../scenes/Login';
import SelectProduct from '../../scenes/SelectProduct';
import SelectLayout from '../../scenes/SelectLayout';
import SelectPatterns from '../../scenes/SelectPatterns';
import Editor from '../../scenes/Editor';
import Export from '../../scenes/Export';
import Styleguide from '../../scenes/Styleguide';
import Legal from '../../scenes/Legal';
import NotFound from '../../scenes/NotFound';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

const navItems = [
    { to: "/select-product", name: "Tvoriť"},
    { to: "/about", name: "O projekte"},
    { to: "/contact", name: "Kontakt"},
    { to: "/login", name: "Prihlásiť"}
];


// internal class for rendering app content and setting _cdu_
class RoutesApp extends Component {

    componentDidUpdate(prevProps, prevState) {
        window.scrollTo(0, 0)
    }

    render() {
        return(
            <div>
                <Navigation navItems={ navItems } collapseOnSelect fluid fixedTop />
                    <Switch>
                        {/* root route */}
                        <Route exact path="/" component={ Home } />
                        {/* top menu navigation routes */}
                        <Route path="/about" component={ About } />
                        <Route path="/contact" component={ Contact } />
                        <Route path="/login" component={ Login } />
                        {/* main app flow routes*/}
                        <Route path="/select-product" component={ SelectProduct } />
                        <Route path="/select-layout" component={ SelectLayout } />
                        <Route path="/select-patterns" component={ SelectPatterns } />
                        <Route path="/editor" component={ Editor } />
                        <Route path="/export" component={ Export } />
                        {/* footer links routes, legal info */}
                        <Route path="/legal-conditions" component={ Legal.Conditions } />
                        <Route path="/return-conditions" component={ Legal.Return } />
                        <Route path="/privacy-protection" component={ Legal.Privacy } />
                        <Route path="/how-to-shop" component={ Legal.Shop } />
                        <Route path="/payment-options" component={ Legal.Payment } />
                        <Route path="/shipping" component={ Legal.Shipping } />
                        <Route path="/styleguide" component={ Styleguide } />
                        {/* 404, not found */}
                        <Route component={ NotFound } />
                    </Switch>
                <Footer/>
            </div>
        );
    }

}

// wrap in router
const Routes = () => (
    <BrowserRouter>
        <RoutesApp/>
    </BrowserRouter>
);

export default Routes;