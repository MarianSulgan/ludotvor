import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Lorem from 'react-lorem-component';

import '../style.css';

class About extends Component {

  render() {
    return (
      <div className="wrapper">
        <Grid className="page-content">
            <Row>
                <Col xs={12} className="block">
                    <h1 className="text block__headline block__headline_h1">O projekte</h1>
                    <Lorem className="text block__text"/>
                </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

export default About;