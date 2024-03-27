import React from 'react'
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom"
import { Searchbar } from '../Searchbar/Searchbar';
import Dropdown from 'react-bootstrap/Dropdown';

export const MenuNavbar = () => {
    return (
        <Navbar expand="lg" className="navbar-container ">
            <Container className='d-flex justify-content-between'>
                <>
                    <Navbar.Brand href="#home"><div className='nav-logo'></div></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='menu-link' to={'/home'}><Nav.Link>Home</Nav.Link></Link>
                            <Link className='menu-link' to={'/home'}><Nav.Link>My Books</Nav.Link></Link>
                            <NavDropdown className='menu-link' title="Browse" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown className='menu-link' title="Community" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <div className='searchbar-container'>
                                <Searchbar />
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </>
                <>
                    <Dropdown>
                        <Dropdown.Toggle className='icon-dropdown' id="dropdown-basic">
                            <img className='nav-icon' src={require('../../assets/img/user.png')} alt='user' />
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='menu-icon-dropdown'>
                            <div className='profile-name'>Arun</div>
                            <Link className='dropdown-menu-li'>Profile</Link>
                            <Link className='dropdown-menu-li'>Friends</Link>
                            <Link className='dropdown-menu-li'>Groups</Link>
                            <Link className='dropdown-menu-li'>Sign out</Link>
                        </Dropdown.Menu>
                    </Dropdown>

                </>
            </Container>
        </Navbar>
    )
}
