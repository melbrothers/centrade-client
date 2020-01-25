import React from 'react';
import Router from 'next/router'

import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartItem from '../CartItem/CartItem.component';
import { selectCartItemsByProvider } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import './cartDropdown.styles.scss';
import { Typography } from '@material-ui/core';

const CartDropdown = ({ cartItems, dispatch }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-item'>
        {cartItems ? (
          Object.keys(cartItems).map(key => (
            cartItems[key].map((cartItem, index) => (
              <React.Fragment>
                {index === 0 ? <Typography>{cartItem.supplier.name}</Typography> : null}
                <CartItem key={cartItem.id} cartItem={cartItem} />
              </React.Fragment>
            ))
          ))
        ) : (
            <div className='message'>Your cart is empty</div>
          )}
      </div>
      <Button
        variant='outlined'
        color='primary'
        className='cart-dropdown-btn'
        onClick={() => {
          Router.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
    </Button>
    </div >
  )
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItemsByProvider
});

export default connect(mapStateToProps)(CartDropdown);