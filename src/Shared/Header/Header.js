import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.jpg'
import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" className="header-container" >
                <Container>
                    <Navbar.Brand href="#home" className="justify-content-start"><img src={logo} className=" w-25" alt="" />
                        <p className="navs-link">Health Care Hospital</p>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className=" justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home" ><p className="links-nav">Home</p></Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about"><p className="links-nav">About</p></Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services"><p className="links-nav">Services</p></Nav.Link>
                        <Nav.Link as={HashLink} to="/home#experts"><p className="links-nav">Experts</p></Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="dark">Logout</Button> :
                            <Nav.Link as={Link} to="/login"><p className="links-nav">Login</p></Nav.Link>}
                        <Navbar.Text>
                            <p className="links-nav">Signed in as: <a href="#login" variant="dark">{user?.displayName}</a></p>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;