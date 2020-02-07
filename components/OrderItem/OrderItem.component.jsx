import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import './orderItem.styles.scss';

const OrderItem = ({ cartItem: { product: { name, description, price, images }, quantity }, no }) => (
  <div className='order-item'>
    <Grid container
      spacing={3}
      justify="center"
      alignItems="center">
      <Grid item xs={2}>
        <Typography variant='body1' component='p'>{no}</Typography>
      </Grid>
      <Grid item xs={2}>
        <img src={images} alt='item' />
      </Grid>
      <Grid item xs={2}>
        <Typography variant='body1' component='span'>{name}</Typography>
      </Grid>
      <Grid item xs={2} >
        <ButtonGroup size='small' aria-label="outlined button group" className='number-locator'>
          <Button onClick={() => removeItem(cartItem)}><RemoveIcon /></Button>
          <Button>{quantity}</Button>
          <Button onClick={() => addItem(cartItem)}><AddIcon /></Button>
        </ButtonGroup>
      </Grid>
      <Grid item xs={2}>
        <Typography variant='body1' component='span'>{price}</Typography>
      </Grid>

    </Grid>

  </div>
);

export default OrderItem;