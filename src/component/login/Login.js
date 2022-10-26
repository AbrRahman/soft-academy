import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
const Login = () => {
    const { signInWithGoogle, signInWithGithub, logInWithEmailAndPassword } = useContext(AuthContext);

    // handel google login
    const handelGoogleLogIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                console.log(error)
            })
    }
    // handel github log in
    const handelGithubLogIn = () => {
        signInWithGithub()
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                console.log(error)
            })
    }
    // handle email password log in 
    const handelLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logInWithEmailAndPassword(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                console.log(error)
            })
        console.log(email, password);

    }
    return (
        <Container className=''>
            <div className='mx-auto' style={{ maxWidth: "500px" }}>
                <h4 className='mt-3'>Login Now</h4>
                <Form onSubmit={handelLogIn} className='mt-3'>
                    <Form.Group className="mb-2">
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>
                    <p>This is error</p>
                    <div className='d-flex align-items-center'>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                        <p className='mt-3 ms-2'>Don't have account? <Link to='/register'><small>Register</small></Link></p>
                    </div>
                </Form>
                <hr />
                <div>
                    <Button onClick={handelGoogleLogIn} className='me-3' variant='outline-primary'><FaGoogle className='me-3'></FaGoogle><small>Login with Google</small></Button>
                    <Button onClick={handelGithubLogIn} variant='outline-dark'><FaGithub className='me-3'></FaGithub><small>Login with Github</small></Button>
                </div>
            </div>
        </Container >
    );
};

export default Login;