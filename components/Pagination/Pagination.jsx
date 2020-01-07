import React from 'react';
import { connect } from 'react-redux';

import { getProductsByPageStart } from '../../redux/product/product.actions';

import Fab from '@material-ui/core/Fab';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import Router from 'next/router';
import Link from 'next/link';

import './pagination.styles.scss';

const Pagination = ({ pageView, getProductListByPageStart }) => {
  const handlePageNavClick = (navUrl) => {
    let querparam = navUrl.replace('/api', '');
    Router.push(`${querparam}`, `${querparam}`, { shallow: true });
    getProductListByPageStart(navUrl);
  }
  return (
    < div className='pagination' >
      {
        pageView && pageView['hydra:first'] ? <Fab disabled={pageView && pageView['@id'] === pageView['hydra:first']} aria-label='first' className='pagination-nav' onClick={() => handlePageNavClick(pageView['hydra:first'])}>
          <FirstPageIcon />
        </Fab> : null
      }
      {
        pageView && pageView['hydra:previous'] ? <Fab aria-label='prev' className='pagenation-nav' onClick={() => handlePageNavClick(pageView['hydra:previous'])}>
          <NavigateBeforeIcon />
        </Fab> : null
      }
      {
        pageView && pageView['hydra:next'] ? <Fab aria-label='next' className='pagination-nav' onClick={() => handlePageNavClick(pageView['hydra:next'])}>
          <NavigateNextIcon />
        </Fab> : null
      }
      {
        pageView && pageView['hydra:last'] ? <Fab disabled={pageView && pageView['@id'] === pageView['hydra:last']} aria-label='last' className='pagination-nav' onClick={() => handlePageNavClick(pageView['hydra:last'])}>
          <LastPageIcon />
        </Fab> : null
      }
      <Link href={pageView && pageView['@id'].replace('/api', '')} className='current-page-link'>
        <a className='nav-item'>Page {pageView && pageView['@id'].split('=')[1]}</a>
      </Link>
    </div >
  )
};

const mapDispatchToProps = dispatch => ({
  getProductListByPageStart: (navUrl) => dispatch(getProductsByPageStart({ navUrl }))
});

export default connect(null, mapDispatchToProps)(Pagination);