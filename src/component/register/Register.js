import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
const Register = () => {
    const [passwordErr, setPasswordErr] = useState('')
    const { signInWithGoogle, signInWithGithub, registerEmailAndPassword, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()
    // handel google register
    const handelGoogleLogIn = () => {
        setPasswordErr('')
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                navigate('/course')
            }).catch((error) => {
                setPasswordErr(error.message)
            })
    }
    // handel github register
    const handelGithubLogIn = () => {
        setPasswordErr('')
        signInWithGithub()
            .then((result) => {
                const user = result.user;
                navigate('/course')
            }).catch((error) => {
                setPasswordErr(error.message)
            })
    }
    // handel email password register
    const handelRegister = (event) => {
        setPasswordErr('')
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        if (password.length < 6) {
            setPasswordErr('Password is must be large then 6 characters');
            return;
        }
        if (password !== confirmPassword) {
            setPasswordErr('Password and confirm password does not match')
            return;
        }
        setPasswordErr('')
        registerEmailAndPassword(email, password)
            .then((result) => {
                const user = result.user;
                handleUserProfile(name, photoUrl)
                navigate('/login')
            }).catch((error) => {
                setPasswordErr(error.message)
            })


    }
    const handleUserProfile = (name, photoUrl) => {
        const userProfile = {
            displayName: name,
            photoURL: photoUrl
        }
        updateUserProfile(userProfile)
            .then(() => {

            }).catch((error) => {
            })
    }
    return (
        <Container>
            <div className='mx-auto' style={{ maxWidth: "500px" }}>
                <h4 className='mt-3'>Register Now</h4>
                <Form onSubmit={handelRegister} className='mt-3'>
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
                    <Form.Group className="mb-2">
                        <Form.Control type="password" name='confirmPassword' placeholder="Confirm password" />
                    </Form.Group>
                    {/* show password error */}
                    <p className='text-danger'>{passwordErr}</p>
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