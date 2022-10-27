import React from 'react';
import { Button, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const CourseCard = ({ course }) => {
    const { rating, title, thumbnail_url, details, course_duration, total_enroll, Instructor, price, _id } = course;
    return (
        <Col>
            <Card className='text-dark'>
                <Card.Img variant="top" src={thumbnail_url} style={{ maxHeight: "120px" }} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details.length > 100 ? <span>{details.slice(0, 100)}...</span> : details}

                    </Card.Text>
                    <h5>Price :{price}$</h5>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p>Rating : {rating}</p>
                        <p>Total Enroll :{total_enroll}</p>
                    </div>
                    <Link to={`/course/${_id}`}><Button>Details</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CourseCard;