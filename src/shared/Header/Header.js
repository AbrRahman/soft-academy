import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaMoon, FaSun, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import './Header.css';
const Header = () => {
    const { user, logOut, lightMode, handleDarkNightMode, } = useContext(AuthContext);
    //handel log out 
    const handelLogout = () => {
        logOut();
    }
    const lightDark = () => {
        handleDarkNightMode(!lightMode)
    }
    console.log('user is', user)
    return (
        <div>
            <Navbar collapseOnSelect className='py-3 bg-3' expand="lg" bg="" variant="">
                <Container>
                    <Navbar.Brand as={Link} to="/course">Soft Academy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/course'>Course</Nav.Link>
                            <Nav.Link as={Link} to='/faq'>FAQ</Nav.Link>
                            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                            {
                                user && user.uid ? <Nav.Link onClick={handelLogout}>LogOut</Nav.Link> :
                                    <>
                                        <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                                        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                                    </>
                            }
                        </Nav>
                        <Nav>
                            <Nav.Link onClick={lightDark}>{lightMode ? <span>Dark <FaMoon></FaMoon></span> : <span>Light <FaSun></FaSun></span>}</Nav.Link>
                            <Nav.Link as={Link}>
                                {
                                    user && user.uid ? (
                                        user.photoURL ? <Image roundedCircle src={user.photoURL} style={{ height: '35px', width: '35px' }} />
                                            : <span style={{ height: '35px', width: '3px' }}>
                                                <FaUserAlt></FaUserAlt>
                                            </span>
                                    ) : ''
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;