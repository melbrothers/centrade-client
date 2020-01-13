import React from 'react';

import './cartItem.styles.scss';



const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className='cart-item'>
    <img className='cart-item-image' src={imageUrl} alt='item' />
    <div className='cart-item-details'>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;