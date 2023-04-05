import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const product = useLoaderData();
    console.log(product);
    return (
        <div className='shop-container'>
            <div className='products-container'>
                <h2>Orders page: {product.length}</h2>
            </div>
            <div className='cart-container'>
                <Cart cart={[]}></Cart>
            </div>
        </div>
    );
};

export default Orders;