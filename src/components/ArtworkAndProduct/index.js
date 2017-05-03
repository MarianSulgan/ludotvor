import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import {Link} from 'react-router-dom';

import SvgWrapper from 'components/SvgWrapper';
import { Store } from 'service/store';

import Products from 'data/products';
import tshirtImage from 'data/images/tshirt.png';
import bagImage from 'data/images/bag.png';

import './style.css';

class ArtworkAndProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: 0
        }
    }

    handleLinkClick = () => {
        let data = Store.getArr("user.created");
        if (data) {
            Store.setArr("sg_canvas", data[this.props.idKey]);
            Store.set("isChange", false);
        }
    }

    render() {

        const svgDataElement = this.props.pattern.shapeContainers.map((elem, index) =>            
            <g key={ index } transform={ elem.transforms }  dangerouslySetInnerHTML={{ __html: this.props.pattern.staticSvgs[elem.index] }} />
        );

        const args =  {
            content: svgDataElement,
            width: 800,
            height: 800,
            patternBorderSize: 60,
            backgroundColor: "transparent",
            layoutType:  this.props.layout,
        }

        let _src = null;
        if (this.props.product === Products.Bag) {
            _src = bagImage;
        } else if (this.props.product === Products.Tshirt) {
            _src = tshirtImage;
        }

        const artworkAndProduct = 
            <div className={ this.props.className }>
                <div className="aap-wrapper">
                    {/*Product Image*/}
                    <div className="product-wrapper">
                        <Image src={ _src } className="aap-img" responsive />
                    </div>
                    {/*SVG Image*/}
                    <div className="svg-wrapper">
                        <SvgWrapper className="aap-svg" {...args} />
                    </div>
                </div>
            </div>

        return (
            <div>
                {
                    this.props.isLink ?
                    <Link to="/editor" onClick={ this.handleLinkClick }>
                        { artworkAndProduct }
                    </Link>
                    :
                    artworkAndProduct
                }
            </div>
        );
    }
}

export default ArtworkAndProduct;