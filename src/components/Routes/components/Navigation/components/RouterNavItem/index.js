/**
 * Adapted from open pull request at github.com
 * Tribute to @miltonmc
 * https://github.com/react-bootstrap/react-router-bootstrap/issues/186
 */

import React, { Component } from 'react';
import { withRouter  } from 'react-router-dom';
import {  NavItem } from 'react-bootstrap';

class NavItemWithoutRouter extends Component {
 
    constructor(props) {
         super(props);
        //  this.state = {
        //      isActive: false
        //  }
         this.handleLink = this.handleLink.bind(this);
    }

    // componentWillMount() {
    //     this.setState({ isActive: false });
    // }
    
    handleLink(path) {
        this.props.history.push(path);
        if (this.props.logout)
            this.props.logout();
    }

    render() {
        const { to, eventKey, children, onSelect } = this.props;
        return (
            <NavItem 
                eventKey={ eventKey } 
                onSelect={ onSelect } 
                onClick={ () => this.handleLink(to) }
                className={ this.props.className } >
                { children }
            </NavItem>
        );
    }
}

const RouterNavItem = withRouter(NavItemWithoutRouter)
export default RouterNavItem;