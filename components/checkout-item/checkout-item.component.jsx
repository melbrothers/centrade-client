import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';

import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem, no }) => {
  const { id, name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <Grid container
        spacing={3}
        justify="center"
        alignItems="center">
        <Grid item xs={2}>
          <Typography variant='body1' component='p'>{no}</Typography>
        </Grid>
        <Grid item xs={2}>
          <img src={imageUrl} alt='item' />
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
        <Grid item xs={2}>
          <div className='remove-btn-container' onClick={() => clearItem(cartItem)}>
            <ClearIcon className='remove-icon' />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);