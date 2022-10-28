import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
const Faq = () => {
    return (
        <Container className='d-flex justify-content-center mt-4'>
            <div className='mx-auto' style={{ maxWidth: '600px' }}>
                <h3>Frequently Asked Questions</h3>
                <Accordion>
                    <Accordion.Item eventKey="0" style={{ maxWidth: '600px' }}>
                        <Accordion.Header>1. What is a web developer?</Accordion.Header>
                        <Accordion.Body>
                            A web developer is a programmer who makes websites, and apps for the World Wide Web.
                            A web developer builds a website from the bottom up, developing everything from layout to
                            functions and features on the page.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" style={{ maxWidth: '600px' }}>
                        <Accordion.Header>2. Are a web developer and a web designer the same thing?</Accordion.Header>
                        <Accordion.Body>
                            A web developer is more concerned with functionality and features of a website, and
                            versed in the programming languages required to create them. Web developers
                            will still need to understand the aesthetics and art direction of the site as they implement features
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" style={{ maxWidth: '600px' }}>
                        <Accordion.Header>3. What does web development entail exactly?</Accordion.Header>
                        <Accordion.Body>
                            eWeb development isn't just building what the user sees. There's a lot underneath the hood of a modern
                            website, and a good web developer can traverse across the entire terrain.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" style={{ maxWidth: '600px' }}>
                        <Accordion.Header>4.What makes a good web developer?</Accordion.Header>
                        <Accordion.Body>
                            The skillset. You'll need to have a great grasp of
                            the programming languages and frameworks to get around in your job . Smart
                            companies are looking to continually improve their processes, which means the code you're using
                            will constantly be changing. You'll need to keep up.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </Container>
    );
};

export default Faq;