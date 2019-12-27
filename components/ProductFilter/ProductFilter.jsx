import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './productFilter.styles.scss';

const ProductFilter = () => {
  const handleChange = event => {
    console.log(event);
  }
  return (
    <div className='product-filter'>
      <FormControl className='product-filter-form-control'>
        <InputLabel id="product-filter-label" >Category</InputLabel>
        <Select
          labelId="product-filter-label"
          className="product-filter-select"
          value={10}
          onChange={handleChange}
        >
          <MenuItem value={10}>Product1</MenuItem>
          <MenuItem value={20}>Product2</MenuItem>
          <MenuItem value={30}>Product3</MenuItem>
        </Select>
        <FormHelperText>Product filter info text</FormHelperText>
      </FormControl>
    </div>
  )
};

export default ProductFilter;