import React from 'react';
import Router from 'next/router'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cartIcon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={gotoCheckout}>
    <Badge badgeContent={itemCount} color="primary">
      <ShoppingCartIcon />
    </Badge>
  </div>
);

const gotoCheckout = () => {
  Router.push('/checkout');
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);