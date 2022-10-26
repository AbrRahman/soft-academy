import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect className='py-3 bg-3' expand="lg" bg="" variant="">
                <Container>
                    <Navbar.Brand as={Link} to="#home">Soft Academy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/course'>Course</Nav.Link>
                            <Nav.Link as={Link} to='/faq'>FAQ</Nav.Link>
                            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                            <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link as={Link} href="#memes">
                                <span title='Ab Rahman' style={{ height: '35px', width: '3px' }}>
                                    <FaUserAlt></FaUserAlt>
                                </span>
                            </Nav.Link>
                            <Nav.Link as={Link} href="#memes">

                                <Image roundedCircle src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbE976Rm9kWFeKdwm9qBDpEv3p-EXn7sUAXA&usqp=CAU' style={{ height: '35px', width: '35px' }} />

                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;