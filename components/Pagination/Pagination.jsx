import React from 'react';
import { connect } from 'react-redux';

import { getProductsByPageStart } from '../../redux/product/product.actions';

import Fab from '@material-ui/core/Fab';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import './pagination.styles.scss';

const Pagination = ({ pageView, getProductListByPageStart }) => {
  console.log(pageView);
  const handlePageNavClick = (navUrl) => {
    getProductListByPageStart(navUrl);
  }
  return (
    < div className='pagination' >
      {
        pageView && pageView['hydra:first'] ? <Fab aria-label='first' className='pagination-nav' onClick={() => handlePageNavClick(pageView['hydra:first'])}>
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
        pageView && pageView['hydra:last'] ? <Fab aria-label='last' className='pagination-nav' onClick={() => handlePageNavClick(pageView['hydra:last'])}>
          <LastPageIcon />
        </Fab> : null
      }
    </div >
  )
};

const mapDispatchToProps = dispatch => ({
  getProductListByPageStart: (navUrl) => dispatch(getProductsByPageStart({ navUrl }))
});

export default connect(null, mapDispatchToProps)(Pagination);