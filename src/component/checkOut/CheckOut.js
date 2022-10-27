import React from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData()
    const { title, price } = course;
    return (
        <div className='text-center mt-4'>
            <h1>Course name :{title}</h1>
            <h3>Price:{price}</h3>
            <Button variant='primary'>checkout</Button>
        </div>
    );
};

export default CheckOut;