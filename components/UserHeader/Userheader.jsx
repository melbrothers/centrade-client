import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import TuneIcon from '@material-ui/icons/Tune';
import Typography from '@material-ui/core/Typography';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

import CartIcon from '../CartIcon/CartIcon.component';
import CartDropdown from '../CartDropdown/CartDropdown.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './userheader.styles.scss';

const Userheader = ({ currentUser, hidden }) => (
  <div className='user-header'>
    <Container className='user-header-box'>
      <Typography variant='h4' component='h4' className='logo-text'>LEGEND</Typography>
      <div className='header-control'>
        <a className='icon-btn'>
          <TuneIcon />
        </a>

        <a className='icon-btn'>
          <Badge badgeContent={4} color="error">
            <NotificationsNoneIcon />
          </Badge>
        </a>

        <CartIcon />
        {hidden ? null : <CartDropdown />}
        {
          currentUser ? (<Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1vRC9KD2b4nC-2_UkBofIWrezbVBzcXAwvzqn1U7h9rY236l6Qw&s" className='user-avatar' />) : (<Avatar alt="Remy Sharp" src="/avatar-default.png" className='user-avatar' />)
        }

      </div>
    </Container>
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps, null)(Userheader);