import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
const Register = () => {
    const { signInWithGoogle, signInWithGithub } = useContext(AuthContext);

    // handel google register
    const handelGoogleLogIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                console.log(error)
            })
    }
    // handel github register
    const handelGithubLogIn = () => {
        signInWithGithub()
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                console.log(error)
            })
    }
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
                    <Button onClick={handelGoogleLogIn} className='me-3' variant='outline-primary'><FaGoogle className='me-3'></FaGoogle><small>SignUp with Google</small></Button>
                    <Button onClick={handelGithubLogIn} variant='outline-dark'><FaGithub className='me-3'></FaGithub><small>SignUp with Github</small></Button>
                </div>
            </div>
        </Container>

    );
};

export default Register;