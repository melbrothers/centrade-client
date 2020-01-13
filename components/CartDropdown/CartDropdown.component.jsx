import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartItem from '../CartItem/CartItem.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import './cartDropdown.styles.scss';

const CartDropdown = ({ cartItems, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-item'>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
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
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </Button>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);