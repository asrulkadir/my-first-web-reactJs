import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Cart.scss";

const Cart = () => {
    return (
        <div className="cart">
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
        </div>
    )
}

export default Cart;
