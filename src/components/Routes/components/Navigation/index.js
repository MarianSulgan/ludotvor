/**
 * Navigation component
 * 
 * @todo: make localization work, with redux, here:
 * https://www.npmjs.com/package/react-translation
 */

import React, { Component } from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import RouterNavItem from './components/RouterNavItem';
import Auth from 'service/auth';
import logoImage from './images/logo.svg';
import './style.css';

class Navigation extends Component {

    handleLogoutClicked = () => {
        Auth.logout();
    }

    render() {

        const navItems = this.props.navItems.map((item, index) =>
            <RouterNavItem key={ index } to={ item.to } className={ item.className }>
                {item.name}
            </RouterNavItem>
        );

        const otherMenuItems = [
            <RouterNavItem key={1} to="/dashboard" className="button button_bordered">Moje!</RouterNavItem>,
            <RouterNavItem key={2} to={ location.pathname } className="button" logout={ this.handleLogoutClicked }>Odhlásiť</RouterNavItem>
        ]

        return (
            <Navbar 
                collapseOnSelect={ this.props.collapseOnSelect } 
                fluid={ this.props.fluid }
                fixedTop={ this.props.fixedTop }
                className="navigation navigation_bg">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">
                            <Image className="image image_logo" src={ logoImage } responsive />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        { navItems }
                        { 
                            Auth.isLoggedIn() ? 
                            otherMenuItems :
                            <RouterNavItem to="/login" className="button button_nav">Prihlásiť</RouterNavItem>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>            
        );
    }
}

export default Navigation;