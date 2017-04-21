import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import './style.css';

class Showcase extends Component {
    state = {  }
    render() {
        return (
            <div className="wrapper">
                <Grid className="page-content" fluid>
                    <p>Lorem ipsum</p>
                </Grid>
            </div>
        );
    }
}

export default Showcase;