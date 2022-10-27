import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../courseCard/CourseCard';
const Courses = () => {
    const [courseNames, setCourseName] = useState([]);
    const courses = useLoaderData()
    useEffect(() => {
        fetch('http://localhost:8000/course-name')
            .then((res) => res.json())
            .then(data => setCourseName(data))
    }, [])
    return (
        <div>
            <Container className="mt-3">
                <Row>
                    <Col lg={9}>
                        <h3 className='text-center'>Our Courses</h3>
                        <Row lg={3} className="g-4 mt-2">
                            {
                                courses.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
                            }

                        </Row>
                    </Col>
                    <Col lg={3}>
                        <div>
                            <h5>Available Course</h5>
                            {
                                courseNames.map(courseName => <p key={courseName.id}><Link to={`/course/${courseName.course_details_id}`}>{courseName.name}</Link></p>)
                            }
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;