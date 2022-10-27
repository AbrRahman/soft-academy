import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <div className='d-flex justify-content-center'>
                <div>
                    <div className='bg-dark text-white p-5 my-3 rounded' style={{ maxWidth: '700px' }}>
                        <h2>1. What is cors?</h2>
                        <p>Cross-Origin Resource Sharing CORS is an HTTP-header based mechanism that allows
                            a server to indicate any origins domain, scheme, or port other than its own from which a
                            browser should permit loading resources. CORS also relies on a mechanism by which browsers
                            make a "preflight" request to the server hosting the cross-origin resource, in order to
                            check that the server will permit the actual request. In that preflight, the browser sends
                            headers that indicate the HTTP method and headers that will be used in the actual
                            request.</p>
                    </div>
                    <div className='bg-light p-5 my-3 rounded' style={{ maxWidth: '700px' }}>
                        <h2>2. Why are you using firebase? What other options do you have to implement authentication?</h2>
                        <p>Firebase provides tools to grow your app and business, for startups & global enterprises.
                            Get your app up and running quickly & securely with fully managed backend
                            infrastructure. Trusted by +200,000 Devs. Release Apps Confidently. Monitor App Performance.</p>

                    </div>
                    <div className='bg-light p-5 my-3 rounded' style={{ maxWidth: '700px' }}>
                        <h2>3. How does the private route work?</h2>
                        <p>The private route component is similar to the public route, the only change is that redirect
                            URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and
                            the user can only access the authenticated routes If he is authenticated Logged in</p>

                    </div>
                    <div className='bg-light p-5 my-3 rounded' style={{ maxWidth: '700px' }}>
                        <h2>4.What is Node? How does Node work?</h2>
                        <p>It is a used as backend service where javascript works on the server-side of the
                            application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine
                            which converts javascript code into machine code, it is highly scalable, lightweight,
                            fast, and data-intensive.</p>

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Blog;