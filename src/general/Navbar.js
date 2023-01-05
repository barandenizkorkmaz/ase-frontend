import { Component } from 'react';
import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { loadState } from '../localstorage/LocalStorage';

export class AseNavbar extends Component {

    constructor(props) {
        super(props);
        this.getLoginStatus = this.getLoginStatus.bind(this);
    }

    getLoginStatus() {
        return loadState("login") === undefined ? false : loadState("login");
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="logout">
                                {
                                    this.getLoginStatus() ? (
                                        "Logout"
                                    ) : (
                                        "Login"
                                    )
                                }
                            </Nav.Link>
                            <Nav.Link href="scanqr">
                                Scan QR
                            </Nav.Link>
                            <NavDropdown title="Add" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.2">
                                    <Link to="add/customer">
                                        Add Customer
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    <Link to="add/deliverer">
                                        Add Deliverer
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    <Link to="add/delivery">
                                        Add Delivery
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Delete" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.2">
                                    <Link to="delete/customer">
                                        Delete Customer
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    <Link to="delete/deliverer">
                                        Delete Deliverer
                                    </Link>

                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    <Link to="delete/delivery">
                                        Delete Delivery
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Update" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.2">
                                    Update Customer
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Update Deliverer
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Update Delivery
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="List" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.4">
                                    <Link to="list/delivery">
                                        List Delivery
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    <Link to="list/customer">
                                        List Customer
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    <Link to="list/deliverer">
                                        List Deliverer
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default AseNavbar;