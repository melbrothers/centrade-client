import React from 'react';

import { connect } from 'react-redux';
import Router from 'next/router';
import { getCategoryStart, getProductsStart } from '../../redux/product/product.actions';


import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import './searchbox.styles.scss';

const Searchbox = ({ getProductListStart }) => {
  const handleSearchClick = () => {
    const searchText = document.getElementById('searchProduct').value;
    console.log(searchText);
    if (searchText) {
      Router.push({ pathname: '/products', query: { name: searchText } });
    }
  }

  const handleRouterComplete = async (url) => {
    if (url.indexOf('name') > -1) {
      await getProductListStart();
    }
  }

  Router.events.on('routeChangeComplete', handleRouterComplete);

  return (
    <div className='search-box'>
      <InputBase
        placeholder="Search…"
        className='search-input'
        inputProps={{ 'aria-label': 'search' }}
        id='searchProduct'
      />

      <Button
        variant="contained"
        className='search-btn'
        startIcon={<SearchIcon />}
        onClick={() => handleSearchClick()}
      >&nbsp;</Button>

    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  getProductListStart: () => dispatch(getProductsStart())
});

export default connect(null, mapDispatchToProps)(Searchbox);