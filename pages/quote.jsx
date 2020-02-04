import React from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import AddIcon from '@material-ui/icons/Add';

import Userheader from '../components/UserHeader/Userheader';
import Subheader from '../components/Subheader/Subheader';

import '../styles/quote.styles.scss';

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const Quote = () => (
  <div className='quote-page'>
    <Userheader />
    <Subheader />
    <Container className='quote-page' maxWidth='lg'>
      <Typography variant='h5' component='h5' className='quote-header'>Quote</Typography>
      <form id='quote-form'>
        <Paper variant='outlined' elevation={3} className='paper' >
          <Box className='quote-content'>
            <TextareaAutosize aria-label="quote description" placeholder="Type here..." className='quote-text' />
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
          </Box>
          <Box mt={3}>
            <Typography variant='h6' component='h6'>Send to:</Typography>

            <FormControl className='shop-selector-container'>
              <InputLabel id="shops-selector" className='shop-selector-label'>Shops</InputLabel>
              <Select
                labelId="demo-mutiple-name-label"
                className='shop-selector'
                multiple
                value={[1, 2, 3]}
                input={<Input />}
              >
                {names.map(name => (
                  <MenuItem key={name} value={name}>
                    <Checkbox />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className='deliver-selector-container'>
              <InputLabel id="shops-selector" className='delivery-selector-label'>Delivery way</InputLabel>
              <Select
                labelId="demo-mutiple-name-label"
                className='delivery-selector'
                multiple
                value={[1, 2, 3]}
                input={<Input />}
              >
                <MenuItem value=''>
                  <Checkbox />
                  <ListItemText primary={'pickup'} />
                </MenuItem>

                <MenuItem value=''>
                  <Checkbox />
                  <ListItemText primary={'delivery'} />
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Paper>
      </form>




    </Container>
  </div>

);

export default Quote;