import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import '../style.css';

const Contact = () => (
  <Grid className="page-content">
      <Row>
          <Col xs={12} className="block">
              <h1 className="text block__headline block__headline_h1">Kontakt</h1>
          </Col>
      </Row>
  </Grid>
);

export default Contact;