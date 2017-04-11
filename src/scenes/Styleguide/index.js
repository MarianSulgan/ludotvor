import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './style.css';
import '../style.css';

const Styleguide = () => (
    <Grid className="page-content" fluid>
        <Row>
            <Col xs={12} className="block">
                <h1 className="text block__headline block__headline_h1">Grafický manuál</h1>
                <p className="text block__text">
                    Na tejto stránke si môžeš omrknúť manuál k značke Ľudotvor. Čo to je za nápad, 
                    prečo logo vyzerá ako vyzerá a tak. Sú tu ukázané aj jednotlivé komponenty aplikácie,
                    takže možno ide skôr ako <em>styleguide</em>. Žiadna veda.
                </p>
            </Col>
        </Row>
    </Grid>
);

export default Styleguide;