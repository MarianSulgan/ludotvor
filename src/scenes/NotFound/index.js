import React from 'react';
import { Grid, Row } from 'react-bootstrap';

import '../style.css';

const NotFound = () => (
    <Grid fluid className="page-content">
        <Row>
            <h1 className="text block__headline">404, stránka sa nenašla</h1>
        </Row>
    </Grid>
);

export default NotFound;