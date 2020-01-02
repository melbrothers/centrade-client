import React, { useState, useEffect } from 'react';

import Avatar from '@material-ui/core/Avatar';
import { Typography, Grid, ButtonGroup, Button, Card } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import './productList.styles.scss';


const ProductList = ({ products }) => {
  const [counter, setCounter] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const onClickHandleAdd = product => {
    let cnt = counter + 1;
    setCounter(cnt);
  }

  const onClickHandleMinus = product => {
    let cnt = counter;
    if (counter > 0) {
      cnt = counter - 1;
    }
    setCounter(cnt);
  }

  return (
    <div className='product-list'>
      {
        products.map((product, index) => {
          return (
            <Card className='product-intro' key={product.id}>
              <Avatar className='product-logo' alt="product image" src={product.logo} />
              <Typography variant='subtitle1' component='h5' className='product-name'>{product.name}</Typography>
              <Typography variant='subtitle2' component='h6'>${product.price}</Typography>
              <Grid container>
                <Grid item xs={9}>
                  <Typography variant='body2' component='p'>{product.description}</Typography>
                </Grid>
                <Grid item xs={3}>
                  {
                    product.imageUrl ? <img src={product.imageUrl} alt='product image' /> : <Skeleton variant='rect' width={210} height={150} />
                  }
                </Grid>
              </Grid>
              <div className='quantity'>
                <Typography variant='subtitle2' component='h6'>Quantity</Typography>
                <ButtonGroup aria-label="outlined primary button group">
                  <Button onClick={() => onClickHandleMinus(product)}>
                    <RemoveIcon />
                  </Button>
                  <Button>{
                    product.counter
                  }&nbsp;</Button>
                  <Button onClick={() => onClickHandleAdd(product)}>
                    <AddIcon />
                  </Button>
                </ButtonGroup>
              </div>
            </Card>
          )
        })
      }

    </div>
  );
}

export default ProductList;