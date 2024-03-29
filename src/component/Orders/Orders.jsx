import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();

    const [cart,setCart] = useState(savedCart)

    const handleRemoveFromCart = (id) =>{
        // console.log(id);
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }
    // console.log(cart);

    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart()
    }




    return (
        <div className='shop-container'>
            <div className='review-container'>
                {/* <h2>Orders page: {cart.length}</h2> */}
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart 
                handleClearCart={handleClearCart}
                cart={cart}
                >
                    {/* <div>From Orders</div> */}
                    <Link className='proceed-link' to='/checkout'>
                        <button className='btn-proceed'>Proceed CheckOut</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;