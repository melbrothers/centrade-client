import React from 'react';

import './cartItem.styles.scss';

const CartItem = ({ cartItem: { images, price, name, quantity } }) => {
  console.log('price', price);
  console.log('image', images);
  console.log('name', name);

  return (
    <div className='cart-item'>
      <img className='cart-item-image' src={images[0]} alt='item' />
      <div className='cart-item-details'>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  )
};

export default CartItem;