import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from './abstract_logo.png';


class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar color='light' light expand='md'>
                    <NavbarBrand className="mr-auto" href="/">
                    <img src={logo} height="50" width="50" alt="Logo" /> JV RESORTS   
                    </NavbarBrand>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href='/home'>HOME</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/book'>BOOK</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/contact'>CONTACT</NavLink>
                        </NavItem>         
                    </Nav>    
                </Navbar>
            </React.Fragment>
        );
    } ;   
};

export default Header;