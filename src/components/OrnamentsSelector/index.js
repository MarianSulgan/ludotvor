import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import ImageWithIcon from './components/ImageWithIcon';
import Ornaments from 'data/ornaments';
import { Store } from 'service/store';

import './style.css';

class OrnamentsSelector extends Component {

    constructor(props) {
        super(props);
        this.state = { images: null, ornaments: [] };
    }

    handleLinkClick() {
        Store.setArr("options.ornaments", this.state.ornaments);
    }

    handleClick(id, state) {
        console.log(id, state);
        console.log(this);
        let temp = this.state.ornaments;
        if (state) {
            // add id to array
            temp.push(id);
        } else {
            // remove id from array
            let index = temp.indexOf(id);
            temp.splice(index, 1);
        }
        this.setState({ ornaments: temp });
    }

    componentDidMount () {
        let arr = [], _images;
        if (this.props.all)
            arr = Ornaments;
        else if (this.props.ornamentsArr)
            arr = this.props.ornamentsArr;

        if (arr.length > 0)
            _images = arr.map((elem, index) => 
            <ImageWithIcon
                key={ index } 
                src={ elem.url } 
                ornamentId={ elem.id.toString() } 
                handleClick={ (id, state) => this.handleClick(id, state) } 
                elemData={ Ornaments[index] }/>
        );
        this.setState({ images: _images });
    }
    

    render() {
        return (
            <div className="ornament-selector-block">
                <Row>
                    {/*/*show loading note or if loaded, display images*/}
                    <Col xs={12} className={`block row__ornament-selector ${this.props.isStandalone && "row__ornament-selector_standalone"}`}>
                    {   
                        this.props.isStandalone ?
                            (this.state.images || 
                            <p className="block__info-text">
                                <FontAwesome className="info-text__icon" name="circle-o-notch" size="lg" spin />
                                { ' ' }
                                <span className="info-text__text">Ornamenty sa načítavajú...</span>
                            </p>)
                        :
                            (this.state.images || 
                            <p className="block__info-text">
                                Pridaj vzor (tým pluskom ↑)
                            </p>)
                    }
                    </Col>
                        
                </Row>
                {
                    this.props.isStandalone &&
                    <Row>
                        <Link className="btn btn-secondary" to="/editor">Preskočiť</Link>
                        { ' ' }
                        <Link className="btn btn-primary" to="/editor" onClick={ () => this.handleLinkClick() }>Vybral som. Ďalej!</Link>
                    </Row>
                }
            </div>
        );
    }
}

export default OrnamentsSelector;