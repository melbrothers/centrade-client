import React from 'react';

import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import './searchbox.styles.scss';

const Searchbox = () => (
  <div className='search-box'>
    <InputBase
      placeholder="Search…"
      className='search-input'
      inputProps={{ 'aria-label': 'search' }}
    />

    <Button
      variant="contained"
      className='search-btn'
      startIcon={<SearchIcon />}
    >&nbsp;</Button>

  </div>
);

export default Searchbox;