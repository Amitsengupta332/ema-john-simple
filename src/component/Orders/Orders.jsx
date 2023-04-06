import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css';

const Orders = () => {
    const cart = useLoaderData();
    // console.log(cart);
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {/* <h2>Orders page: {cart.length}</h2> */}
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;