import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';

import { createStructuredSelector } from 'reselect';

import StripeCheckoutButton from '../components/stripe-button/stripe-button.component';
import CheckoutItem from '../components/checkout-item/checkout-item.component';

import Userheader from '../components/UserHeader/Userheader';

import {
  selectCartItemsByProvider,
  selectCartTotal
} from '../redux/cart/cart.selectors';

import '../styles/checkout.styles.scss';
import Subheader from '../components/Subheader/Subheader';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <Userheader />
    <Subheader />
    <Box ml={5} mt={3}>
      <Typography variant='h5' component='h5'>Checkout</Typography>
    </Box>

    <Card className='checkout-container'>

      {Object.keys(cartItems).map(key => (
        cartItems[key].map((cartItem, index) => (
          <React.Fragment>
            {index === 0 ? <div className='provider-info'><Typography variant='h6'>{cartItem.supplier.name}</Typography></div> : null}
            {
              index === 0 ? <div className='checkout-header'>
                <Grid container spacing={3} alignItems='center' justify="center">
                  <Grid item xs={2}>
                    <Typography className='checkout-header-text'><Box fontWeight={500}>No.</Box></Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography className='checkout-header-text'><Box fontWeight={500}>Product</Box></Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography className='checkout-header-text'><Box fontWeight={500}>Description</Box></Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography className='checkout-header-text'><Box fontWeight={500}>Quantity</Box></Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography className='checkout-header-text'><Box fontWeight={500}>Price</Box></Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography className='checkout-header-text'><Box fontWeight={500}>Remove</Box></Typography>
                  </Grid>
                </Grid>
              </div> : null
            }

            <CheckoutItem key={cartItem.id} cartItem={cartItem} no={index + 1} />
          </React.Fragment>
        ))
      ))}
      <div className='delivery-cost-container'>
        <span>Delivery Cost</span>
        <span>Free</span>
      </div>
      <div className='total-container'>
        <span>Total</span>
        <span>${total}</span>
      </div>
      <div className='place-order-container'>
        <StripeCheckoutButton price={total} />
      </div>

    </Card>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItemsByProvider,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);