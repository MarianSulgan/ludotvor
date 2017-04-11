/**
 * SideNavigation
 * 
 * Based on Codrops article: https://tympanus.net/Development/NavigationIndicators/
 * Zahi navigation indicator.
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class SideNavigation extends Component {

    constructor() {
        super();
        this.state = {
            indicatorCount: 6
        }
    }

    init() {
		[].slice.call(document.querySelectorAll('.nav')).forEach(function(nav) {
			var navItems = [].slice.call(nav.querySelectorAll('.nav__item')),
				// itemsTotal = navItems.length,
				setCurrent = function(item) {
					// return if already current
					if( item.classList.contains('nav__item--current') ) {
						return false;
					}
					// remove current
					var currentItem = nav.querySelector('.nav__item--current');
					if (currentItem)
                        currentItem.classList.remove('nav__item--current');
					
					// set current
					item.classList.add('nav__item--current');
				};
			
			navItems.forEach(function(item) {
				item.addEventListener('click', function() { setCurrent(item); });
			});
		});
        // set current item based on property passed to component
        var btns = document.getElementsByClassName("nav__item");
        if (this.props.indicatorNumber >= 0 && this.props.indicatorNumber < btns.length) {
            btns.item(this.props.indicatorNumber).classList.add('nav__item--current');
        }
	}

    componentDidMount() {
        this.init();
    }

    render() {
        return (
            <section className="section section--nav">
                <nav className="nav nav--zahi">
                    <Link to="/select-product">
                        <button className="nav__item" aria-label="Item 1">
                            <span className="nav__item-title">Produkt</span>
                        </button>
                    </Link>
                    <Link to="/select-layout">
                        <button className="nav__item" aria-label="Item 2">
                            <span className="nav__item-title">Rozloženie</span>
                        </button>
                    </Link>
                    <Link to="/select-patterns">
                        <button className="nav__item" aria-label="Item 3">
                            <span className="nav__item-title">Vzory</span>
                        </button>
                    </Link>
                    <Link to="/editor">
                        <button className="nav__item" aria-label="Item 4">
                            <span className="nav__item-title">Generátor</span>
                        </button>
                    </Link>
                    <Link to="/export">
                        <button className="nav__item" aria-label="Item 5">
                            <span className="nav__item-title">Hotovo!</span>
                        </button>
                    </Link>
                </nav>
            </section>
        );
    }
}

export default SideNavigation;
