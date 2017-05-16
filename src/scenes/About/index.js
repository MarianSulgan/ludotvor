import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import '../style.css';

class About extends Component {

  render() {
    return (
      <div className="wrapper">
        <Grid className="page-content">
            <Row>
                <Col xs={12} className="block">
                    <h1 className="text block__headline block__headline_h1">O projekte</h1>
                    <p className="text block__text">
                      „Malý národ v kultúrnej súťaži s veľkými civilizovanými národmi môže len tak obstáť, keď predloží pozoruhodnosti svojej originality. Veľké národy i bez tejto vlastnosti môžu sa vliať do mora svetovosti bez obavy, že by tam mohli zaniknúť, že by sa  tam mohli stratiť. Svetovosť do istej miery stiera národné hranice, preto čím menší národ, tým húževnatejšie sa má pridŕžať svojich kmeňových znakov.
                    </p>
                    <p className="text block__text">
                      I my si musíme svoju kultúrnu existenciu brániť rázovitosťou, originalitou, ktorá tkvie v svojráznych koreňoch našich predkov. Aby náš výtvarný prínos medzi veľkými národmi nezanikol, musí mať rýdzo slovenský výraz…“
                    </p>
                    <p className="text block__text">
                      <strong>&mdash; Ľudovít Fulla</strong>
                    </p>
                </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

export default About;