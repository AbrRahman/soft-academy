import React from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
const CourseCard = ({ course }) => {
    const { rating, title, thumbnail_url, details, course_duration, total_enroll, Instructor } = course;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={thumbnail_url} style={{ maxHeight: "120px" }} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CourseCard;