/**
 * Showcase Page
 * 
 * Page to showcase others artwork
 * Currently not in use, only for future purposes
 * 
 * @todo: consider adding showcase section to homepage
 */

import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import './style.css';

class Showcase extends Component {
    state = {  }
    render() {
        return (
            <div className="wrapper">
                <Grid className="page-content" fluid>
                </Grid>
            </div>
        );
    }
}

export default Showcase;