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
        let temp = Store.getArr("options.ornaments");
        this.state = { 
            images: [ null ],
            regions: [], 
            ornaments: temp === null ? [] : temp 
        };
    }

    handleLinkClick() {
        // let temp = this.state.ornaments;
        // console.log("handle... ", temp);
        // Store.setArr("options.ornaments", temp.length === 0 ? null : temp);
    }

    handleClick(id, state) {
        let temp = this.state.ornaments;
        if (state) {
            // do not select ornament, if max count is selected
            if (temp.length >= this.props.maxCount)
                return false;
            // add id to array
            temp.push(id);
        } else {
            // remove id from array
            let index = temp.indexOf(id);
            temp.splice(index, 1);
        }

        this.setState({ ornaments: temp }, () => {
            let x = this.state.ornaments;
            Store.setArr("options.ornaments", x.length === 0 ? null : x);
            this.props.handleSelectedCount(x.length);
        });
        return true;
    }

    componentDidMount () {
        let arr = [], _images;
        if (this.props.all)
            arr = Ornaments;
        else if (this.props.ornamentsArr)
            arr = this.props.ornamentsArr;

        // get currently selected ornaments
        let temp, _ornaments = Store.getArr("options.ornaments");
        if (_ornaments != null) {
            temp = _ornaments
        } else {
            temp = [];
        }

        // send length to parent
        this.props.onRender(temp.length);

        // get ornaments regions
        let regions = [];
        for (let i = 0; i < Ornaments.length; i++) {
            if (!regions.includes(Ornaments[i].region)) 
                regions.push(Ornaments[i].region);
        }
        this.setState({ regions: regions });

        // get all ornaments by regions to arrays
        let ornamentsByRegion = [];
        for (let i = 0; i < regions.length; i++) {
            let temp = [];
            for (let j = 0; j < Ornaments.length; j++) {
                if (Ornaments[j].region === regions[i]) {
                    temp.push(Ornaments[j]);
                }
            }
            ornamentsByRegion.push({
                // region: regions[i],
                ornaments: temp
            });
        }

        // console.log(ornamentsByRegion[0].ornaments);
        // console.log(Ornaments);
        let content = [];
        for (let i = 0; i < ornamentsByRegion.length; i++) {
            let images;
            if (arr.length > 0) {
                images = ornamentsByRegion[i].ornaments.map((elem, index) => 
                    <ImageWithIcon
                        key={ index } 
                        src={ elem.url } 
                        ornamentId={ elem.id.toString() } 
                        handleClick={ (id, state) => this.handleClick(id, state) } 
                        elemData={ ornamentsByRegion[i].ornaments[index] }
                        isActive={ temp.includes(elem.id.toString()) } />
                    )
            };
            content.push(images)
        }
        console.log(content);

        /*if (arr.length > 0)
            _images = arr.map((elem, index) => 
            <ImageWithIcon
                key={ index } 
                src={ elem.url } 
                ornamentId={ elem.id.toString() } 
                handleClick={ (id, state) => this.handleClick(id, state) } 
                elemData={ Ornaments[index] }
                isActive={ temp.includes(elem.id.toString()) } />
        );*/

        this.setState({ images: content });
    }
    

    render() {
        let disableButton;
        if (this.state.ornaments) 
            disableButton= this.state.ornaments.length === 0;

        const rowsWithOrnaments = this.state.images.map((elem, index) => 
            <Row key={ index }>
                <h2 className="block__headline block__headline_h2 block__headline_left">{ this.state.regions[index] }</h2>
                <Col xs={12} disabled className={`block row__ornament-selector ${this.props.isStandalone && "row__ornament-selector_standalone"}`}>
                {   
                    this.props.isStandalone ?
                        (elem || 
                        <p className="block__info-text">
                            <FontAwesome className="info-text__icon" name="circle-o-notch" size="lg" spin />
                            { ' ' }
                            <span className="info-text__text">Ornamenty sa načítavajú...</span>
                        </p>)
                    :
                        (elem || 
                        <p className="block__info-text">
                            Pridaj vzor (tým pluskom ↑)
                        </p>)
                }
                </Col>
            </Row>
        );

        return (
            <div className="ornament-selector-block">
                
                { rowsWithOrnaments }

                {
                    this.props.isStandalone &&
                    <Row className="ornament-selector-block__row">
                        <Link className={`button btn btn-secondary ${ disableButton ? "" : "disabled" }`} to="/editor">Preskočiť</Link>
                        { ' ' }
                        <Link className={`button btn btn-primary ${ disableButton ? "disabled" : "" }`} to="/editor" onClick={ () => this.handleLinkClick() }>Vybral som. Ďalej!</Link>
                    </Row>
                }
            </div>
        );
    }
}

export default OrnamentsSelector;