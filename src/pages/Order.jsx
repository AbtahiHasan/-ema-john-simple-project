import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Summary from '../components/body/Summary';

const Order = () => {
    const cart = useLoaderData()
    return (
        <div>
            <Summary cart={cart}/>
        </div>
    );
};

export default Order;