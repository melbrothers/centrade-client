import React from 'react';
import Link from 'next/link';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './header.styles.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className='left-nav'>
        <Link href="/products">
          <a className='nav-item'>Products</a>
        </Link>
        <Link href="/wholesalers">
          <a className='nav-item'>Wholesalers</a>
        </Link>
        <Link href="/services">
          <a className='nav-item'>Services</a>
        </Link>
        <Link href="/about">
          <a className='nav-item'>About</a>
        </Link>
        <Link href="/terms">
          <a className='nav-item'>Terms</a>
        </Link>
      </div>
      <div className='right-nav'>
        <Link href="/signin">
          <a className='nav-item'>Sign In</a>
        </Link>
        <Link href="/products">
          <a className='nav-item'>
            <ShoppingCartIcon />
          </a>
        </Link>
      </div>
    </div>
  )
};

export default Header;