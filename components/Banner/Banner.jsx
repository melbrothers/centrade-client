import React from 'react';
import { Box } from '@material-ui/core';

import './banner.styles.scss';

const Banner = ({ imageUrl }) => (
  <div className='banner'>
    <Box component='div'>
      <img src={imageUrl} alt="banner image" width='100%' className='banner-image' />
    </Box>
  </div>
);

export default Banner;