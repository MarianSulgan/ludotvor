/**
 * App container with navigation, handling routing
 */

import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './scenes/Home';
import About from './scenes/About';
import Contact from './scenes/Contact';

class Routes extends Component {

    render() {
        return(
            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>            

                    <hr/>

                    <Route exact path="/" component={ Home } />
                    <Route path="/about" component={ About } />
                    <Route path="/contact" component={ Contact } />
                </div>
            </BrowserRouter>
        );
    }
}

export default Routes;