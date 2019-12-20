import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { signOutStart } from '../../redux/user/user.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import Link from 'next/link';
import './header.styles.scss';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';

const Header = ({ currentUser, signOutStart }) => {
  signOutStart
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
        {currentUser && currentUser.token !== 'undefined' ?
          <Link href='/signout' onClick={signOutStart}>SIGN OUT</Link>
          :
          <Link href="/signin">
            <a className='nav-item'>Sign In</a>
          </Link>
        }

        <Link href="/products">
          <a className='nav-item'>
            <ShoppingCartOutlined color='primary' />
          </a>
        </Link>
      </div>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);