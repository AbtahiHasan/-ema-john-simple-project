import React from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderCart from '../components/body/OrderCart';
import Summary from '../components/body/Summary';

const Order = () => {
    const cart = useLoaderData()
    return (
        <div className='grid md:grid-cols-4 max-w-[1240px] mx-auto'>
            <div className='col-span-3 mt-20'>
            {
                cart.map((singleCart) => <OrderCart key={singleCart.id} singleCart={singleCart}/>)
            }
            </div>
            
            
            <Summary cart={cart}/>
        </div>
    );
};

export default Order;