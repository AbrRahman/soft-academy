import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Register = () => {
    return (

        <Container>
            <div className='mx-auto' style={{ maxWidth: "500px" }}>
                <h4 className='mt-3'>Register Now</h4>
                <Form className='mt-3'>
                    <Form.Group className="mb-2">
                        <Form.Control type="text" name='name' placeholder="Enter user name" />
                    </Form.Group>
                    <Form.Group className="mb-2" >
                        <Form.Control type="text" name='photoUrl' placeholder="Enter photo url" />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    <p>This is error</p>
                    <div className='d-flex align-items-center'>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                        <p className='mt-3 ms-2'>Already have account? <Link to='/login'><small>Login</small></Link></p>
                    </div>
                </Form>
                <hr />
                <div>
                    <Button className='me-3' variant='outline-primary'><FaGoogle className='me-3'></FaGoogle><small>SignUp with Google</small></Button>
                    <Button variant='outline-dark'><FaGithub className='me-3'></FaGithub><small>SignUp with Github</small></Button>
                </div>
            </div>
        </Container >

    );
};

export default Register;