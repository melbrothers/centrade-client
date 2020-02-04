import React from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import AddIcon from '@material-ui/icons/Add';

import Userheader from '../components/UserHeader/Userheader';
import Subheader from '../components/Subheader/Subheader';

import '../styles/quote.styles.scss';

const Quote = () => (
  <div className='quote-page'>
    <Userheader />
    <Subheader />
    <Container className='quote-page' maxWidth='lg'>
      <Typography variant='h5' component='h5' className='quote-header'>Quote</Typography>

      <Paper variant='outlined' elevation={3} className='paper' >
        <TextareaAutosize aria-label="quote description" placeholder="Type here..." rowsMin={3} className='quote-text' />

        <GridList className='item-pictures' cols={5} >
          <GridListTile className='item-pic'>
            <img src='https://www.build-electronic-circuits.com/wp-content/uploads/2014/10/Three_IC_circuit_chips-Public-Domain-1024x832.jpg' alt='item image' />
          </GridListTile>
          <GridListTile className='item-pic'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPp1DLoxtZu1uB4X5cUIUfCSl1TCWge62W3CVAEIjWOovgG49P&s' alt='item image' />
          </GridListTile>
        </GridList>

        <Fab aria-label="add">
          <AddIcon color='action' fontSize='large' />
        </Fab>
      </Paper>
    </Container>
  </div>

);

export default Quote;