import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import TuneIcon from '@material-ui/icons/Tune';
import Typography from '@material-ui/core/Typography';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Fab from '@material-ui/core/Fab';

import './userheader.styles.scss';

const Userheader = () => (
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

        <Avatar alt="Remy Sharp" src="/avatar-default.png" className='user-avatar' />
      </div>
    </Container>
  </div>
);

export default Userheader;