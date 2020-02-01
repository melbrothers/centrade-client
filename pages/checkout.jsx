import React, { useEffect } from 'react';

import Router from 'next/router'

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';

import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../components/checkout-item/checkout-item.component';

import Userheader from '../components/UserHeader/Userheader';

import { placeOrderStart } from '../redux/order/order.actions.js';

import {
  selectCartItemsByProvider,
  selectCartTotal
} from '../redux/cart/cart.selectors';

import '../styles/checkout.styles.scss';
import Subheader from '../components/Subheader/Subheader';

const CheckoutPage = ({ cartItems, total, placeOrdersStart }) => {
  const placeOrders = (event) => {
    console.log('cart items for order', cartItems);
    Object.keys(cartItems).map(key => {
      placeOrdersStart(cartItems[key]);
    });
  }

  const getSubTotal = shopItems => {
    console.log('shop items', shopItems);
    let total = 0;
    shopItems.map((shopItem) => {
      console.log(total);
      total = parseFloat(total) + parseFloat(shopItem.price);
    });
    return total;
  }


  const goBack = event => {
    Router.push('/products');
  }
  return (
    <div className='checkout-page'>
      <Userheader />
      <Subheader />
      <Box ml={5} mt={3}>
        <Typography variant='h5' component='h5'>Checkout</Typography>
      </Box>
      {Object.entries(cartItems).length !== 0 ?
        <div className='items-container'>
          <Card className='checkout-container'>
            {
              Object.keys(cartItems).map(key => (
                <div className='shop-items' key={key}>
                  {
                    cartItems[key].map((cartItem, index) => (
                      <React.Fragment key={index}>
                        {index === 0 ? <Typography variant='h6' className='provider-info'>{cartItem.supplier.name}</Typography> : null}
                        {
                          index === 0 ?
                            <Grid container spacing={3} alignItems='center' justify="center" className='checkout-header'>
                              <Grid item xs={2}>
                                <Typography variant='h6' className='checkout-header-text'>No.</Typography>
                              </Grid>
                              <Grid item xs={2}>
                                <Typography variant='h6' className='checkout-header-text'>Product</Typography>
                              </Grid>
                              <Grid item xs={2}>
                                <Typography variant='h6' className='checkout-header-text'>Description</Typography>
                              </Grid>
                              <Grid item xs={2}>
                                <Typography variant='h6' className='checkout-header-text'>Quantity</Typography>
                              </Grid>
                              <Grid item xs={2}>
                                <Typography variant='h6' className='checkout-header-text'>Price</Typography>
                              </Grid>
                              <Grid item xs={2}>
                                <Typography variant='h6' className='checkout-header-text'>Remove</Typography>
                              </Grid>
                            </Grid>
                            : null
                        }
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} no={index + 1} />
                      </React.Fragment>
                    ))
                  }

                  <div className='checkout-summary'>
                    <div className='delivery-cost-container'>
                      <span>Delivery Cost</span>
                      <span>Free</span>
                    </div>
                    <div className='total-container'>
                      <span>Total</span>
                      <span>${getSubTotal(cartItems[key])}</span>
                    </div>
                    <div className='place-order-container'>
                      <Button variant="contained" color="primary" onClick={placeOrders}>Place order</Button>
                    </div>
                  </div>
                </div>
              ))
            }
          </Card>
          <Card className='pay-row'>
            <Typography variant='h5' component='h5'>Total price: {total}</Typography>
            <Button variant='contained' color='primary' >Confirm & pay</Button>
          </Card>
        </div>
        : <Card className='checkout-container'>
          <Box padding={5}>
            <Typography>You don't have any items in cart.</Typography>
            <Button color='primary' onClick={goBack}>Go Back</Button>
          </Box>

        </Card>
      }

    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItemsByProvider,
  total: selectCartTotal
});

const mapDispatchToProps = dispatch => ({
  placeOrdersStart: (cartItems) => dispatch(placeOrderStart(cartItems))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);