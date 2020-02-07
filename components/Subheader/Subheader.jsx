import React from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';

import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ReceiptIcon from '@material-ui/icons/Receipt';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import HomeIcon from '@material-ui/icons/Home';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

import './subheader.styles.scss';


const Subheader = () => {
  const router = useRouter();

  return (
    <div className='subheader'>
      <Grid container justify='space-evenly'>
        <Grid item xs={12} lg='auto' className='subheader-item'>
          <Link href='/products' >
            <a className={`subheader-item-link ${router.pathname === '/products' ? 'active' : null}`}>
              <HomeIcon />
              Home
          </a>
          </Link>
        </Grid>

        <Grid item xs={12} lg='auto' className='subheader-item'>
          <Link href='/checkout' >
            <a className={`subheader-item-link ${router.pathname === '/checkout' ? 'active' : null}`}>
              <LocalMallIcon />
              Checkout
          </a>
          </Link>
        </Grid>

        {/* <Grid item xs={12} lg='auto' className='subheader-item'>
          <Link href='/orders' >
            <a className={`subheader-item-link ${router.pathname === '/orders' ? 'active' : null}`}>
              <LocalMallIcon />
              Orders
          </a>
          </Link>
        </Grid> */}

        <Grid item xs={12} lg='auto' className='subheader-item'>
          <Link href='/quote' >
            <a className={`subheader-item-link ${router.pathname === '/quote' ? 'active' : null}`}>
              <QuestionAnswerIcon />
              Quote
          </a>
          </Link>
        </Grid>

        <Grid item xs={12} lg='auto' className='subheader-item'>
          <Link href='/invoice'>
            <a className={`subheader-item-link ${router.pathname === '/invoice' ? 'active' : null}`}>
              <ReceiptIcon />
              Invoice
          </a>
          </Link>
        </Grid>

        <Grid item xs={12} lg='auto' className='subheader-item'>
          <Link href='/message'>
            <a className={`subheader-item-link ${router.pathname === '/message' ? 'active' : null}`}>
              <AddShoppingCartIcon />
              Message
          </a>
          </Link>
        </Grid>

        <Grid item xs={12} lg='auto' className='subheader-item'>
          <Link href='/paymenthistory'>
            <a className={`subheader-item-link ${router.pathname === '/paymenthistory' ? 'active' : null}`}>
              <AccountBalanceWalletIcon />
              Payment History
          </a>
          </Link>
        </Grid>
      </Grid>
    </div>
  )
};

export default Subheader;