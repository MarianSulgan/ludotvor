import React, { Component } from 'react';

import ArtworkAndProduct from 'components/ArtworkAndProduct';

import './style.css'

class OrderItem extends Component {
    state = {  }
    render() {
        const { isLink, ...rest} = this.props;
        return (
            <div className="orders__item">
                <ArtworkAndProduct { ...rest } isLink={ false }/>
                <div className="orders__item-data">
                    <div className="item__label">
                        Cena: <span className="label-main">{this.props.orderData.price} &euro;</span>
                    </div>
                    <div className="item__label">
                        Počet kusov: <span className="label-main">{this.props.orderData.pieces}</span>
                    </div>
                    <div className="item__label">
                        Stav: <span className="label-main">Ľudo tvorí.</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderItem;