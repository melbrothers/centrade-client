import React from 'react';

import Link from 'next/link';
import Typography from '@material-ui/core/Typography';

import './footer.styles.scss';

const Footer = () => (
  <div className='footer'>
    <div className='footer-links'>
      <Link href='/about'><a>About</a></Link>
      <Link href='/terms'><a>Terms and condition</a></Link>
      <Link href='/contact'><a>Contact</a></Link>
      <Link href='/help'><a>Help</a></Link>
    </div>
    <div className='copyright'>
      <Typography variant='body2' component='h4' align='center'>Copyright &copy; 2010-2019 Legend. All rights reserved.</Typography>
    </div>
  </div>
);

export default Footer;