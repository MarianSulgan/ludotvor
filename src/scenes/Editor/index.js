import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SideNavigation from '../../components/SideNavigation';

import '../style.css';

class Editor extends Component {
    render() {
        return (
            <div>
                <Grid className="page-content" fluid>
                    <Row>
                        <Col xs={ 3 } sm={ 2 }>
                            <SideNavigation indicatorNumber={ 3 }/>
                        </Col>
                        <Col xs={ 9 } sm={ 10 } className="block">
                            <Row>
                                <Col xs={12} className="block text-center">
                                    <Link className="btn btn-primary" to="/export">Hotovo</Link>
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