import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLoaderData } from 'react-router-dom';
const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { rating, title, thumbnail_url, details, course_duration, total_enroll, Instructor, price, _id } = courseDetails;
    return (
        <div>
            <Navbar bg="light">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link><Button variant='primary'>Download</Button></Nav.Link>
                        <Nav.Link><Button variant='primary'>Purchase Course</Button></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <Row>
                    <Col md='4'>
                        <div className='d-flex align-items-center justify-content-center'>
                            <img src={thumbnail_url} alt="" className="mt-3 w-100" />
                        </div>
                    </Col>
                    <Col md='8'>
                        <div className='p-3'>
                            <h3>{title}</h3>
                            <p>{details}</p>
                            <h5>Price : {price}$</h5>
                            <ul>
                                <li>Rating : {rating}</li>
                                <li>Course Duration : {course_duration}</li>
                                <li>Total Enroll {total_enroll}</li>
                            </ul>
                            <h6>Course Instructor : {Instructor}</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseDetails;