/**
 * Navigation component
 * 
 * @todo: make localization work, with redux, here:
 * https://www.npmjs.com/package/react-translation
 */

import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import RouterNavItem from './components/RouterNavItem';

class Navigation extends Component {
    render() {

        const navItems = this.props.navItems.map((item, index) =>
            <RouterNavItem key={ index } to={ item.to }>
                {item.name}
            </RouterNavItem>
        );

        return (
            <Navbar 
                collapseOnSelect={ this.props.collapseOnSelect } 
                fluid={ this.props.fluid }
                fixedTop={ this.props.fixedTop }>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Ľudotvor</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        { navItems }
                        <NavItem>EN</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>            
        );
    }
}

export default Navigation;