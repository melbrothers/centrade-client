import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Header from '../components/Header/Header';
import Subheader from '../components/Subheader/Subheader';

const Products = () => (
  <div className='products'>
    <Subheader />
    <Container maxWidth="md">
      <Typography variant='h5' component="h3" >
        Products
      </Typography>
    </Container>
  </div>
);

export default Products;