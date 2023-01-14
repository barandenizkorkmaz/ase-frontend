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
                            <NavDropdown title="BoxForDispatcher" id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link to="box">
                                        Add Box
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="dispatcher/box/list">
                                        List Box
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="update/box">
                                        Update Box
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="delete/box">
                                        Delete Box
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="BoxForDeliverer" id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link to="deliverer/box/list">
                                        List Box For Deliverer
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="DeliveryForDispacther" id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link to="delivery">
                                        Add Delivery
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="dispacther/delivery/list">
                                        List Delivery
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="update/delivery">
                                        Update Delivery
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="delete/delivery">
                                        Delete Delivery
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="DeliveryForDeliverer" id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link to="deliverer/delivery/list">
                                        List Delivery
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="DeliveryForCustomer" id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link to="customer/delivery/list/active">
                                        List Delivery For User Active
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="customer/delivery/list/past">
                                        List Delivery For User Past
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="customer/delivery/track">
                                        Track Delivery For User
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="User" id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link to="user">
                                        Add User
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="list/user">
                                        List User
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="update/user">
                                        Update User
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="delete/user">
                                        Delete User
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