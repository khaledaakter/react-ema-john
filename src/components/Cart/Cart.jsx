import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {

    console.log(cart);
    let total = 0;
    let totalShipping = 0;
    let tex = 0;
    let grandTotal = 0;
    for(const product of cart) {
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
        tex = total*7/100;
        grandTotal = total + totalShipping + tex + grandTotal;
    }

    return (
        <div>
            <div className="cart">
                <h4>Order Summary</h4>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tex.toFixed(2)}</p>
                <p className='grand-total'>Grand Total: ${grandTotal.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default Cart;