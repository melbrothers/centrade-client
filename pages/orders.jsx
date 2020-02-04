import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectOrderedItems } from '../redux/order/order.selectors';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Userheader from '../components/UserHeader/Userheader';
import Subheader from '../components/Subheader/Subheader';

import '../styles/order.styles.scss';
import OrderItem from '../components/OrderItem/OrderItem.component';
import Footer from '../components/Footer/Footer';

const Orders = ({ orderedItems }) => {
  console.log('ordered Items', orderedItems);
  if (orderedItems && orderedItems.order_items) {
    return (
      <div className='order-page'>
        <Userheader />
        <Subheader />
        <Box ml={5} mt={3}>
          <Typography variant='h5' component='h5'>Order</Typography>
        </Box>

        <Card className='orders-container'>
          <Typography variant='h6' className='provider-info'>{orderedItems.supplier.name}</Typography>
          <React.Fragment>
            <Grid container spacing={3} alignItems='center' justify="center" >
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
            </Grid>
          </React.Fragment>
          {
            orderedItems.order_items && orderedItems.order_items.length > 0 ?
              orderedItems.order_items.map((cartItem, index) => {
                return <OrderItem cartItem={cartItem} no={index + 1} key={index} />
              }) : null
          }
        </Card>
        <Footer />
      </div>
    )
  } else {
    return (
      <div className='order-page'>
        <Userheader />
        <Subheader />
        <Card className='orders-container'>
          <Typography variant='h6' className='provider-info'>No orders</Typography>
        </Card>
      </div>
    )
  }
};

const mapStateToProps = createStructuredSelector({
  orderedItems: selectOrderedItems
});

export default connect(mapStateToProps, null)(Orders);