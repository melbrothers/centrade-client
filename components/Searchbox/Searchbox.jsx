import React from 'react';
import Router from 'next/router';

import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import './searchbox.styles.scss';

const Searchbox = () => {
  const handleSearchClick = event => {
    const searchText = document.getElementById('searchProduct').value;
    console.log(searchText);
    if (searchText) {
      Router.push(`/products?name=${searchText}`);
    }
  }

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
        onClick={handleSearchClick}
      >&nbsp;</Button>

    </div>
  )
};

export default Searchbox;