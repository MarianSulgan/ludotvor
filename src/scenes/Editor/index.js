import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SideNavigation from '../../components/SideNavigation';
import ShapeGrammar from '../../components/ShapeGrammar';

import './style.css';
import '../style.css';

class Editor extends Component {
    render() {
        return (
            <div>
                <Grid className="page-content page-content_editor_theme" fluid>
                    <Row>
                        <Col xs={ 3 } sm={ 2 }>
                            <SideNavigation indicatorNumber={ 3 }/>
                            <Link className="btn btn-primary btn-lg button button_primary button_on-top" to="/export">Hotovo</Link>
                        </Col>
                        <Col xs={ 9 } sm={ 10 } className="block">
                            <Row>
                                <Col xs={12} className="block text-center">
                                    <ShapeGrammar.Canvas />

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Editor;