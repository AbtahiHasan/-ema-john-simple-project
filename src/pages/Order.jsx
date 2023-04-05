import React from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderCart from '../components/body/OrderCart';
import Summary from '../components/body/Summary';

const Order = () => {
    const cart = useLoaderData()
    return (
        <div className='grid md:grid-cols-4'>
            
            {
                cart.map((singleCart) => <OrderCart key={singleCart.id} singleCart={singleCart}/>)
            }
            <Summary cart={cart}/>
        </div>
    );
};

export default Order;