import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';


import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import Userheader from '../components/UserHeader/Userheader';
import Subheader from '../components/Subheader/Subheader';
import ImageUploader from '../components/ImageUploader/ImageUploader';

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

const Quote = () => {
  const [deliveryWay, setDeliveryWay] = useState('1');
  const [selectedShop, setSelectedShop] = useState([]);
  const handleDeliveryChange = event => {
    setDeliveryWay(event.target.value);
  }

  const handleShopChange = event => {
    setSelectedShop(event.target.value);
  };


  return (
    <div className='quote-page'>
      <Userheader />
      <Subheader />
      <Container className='quote-page' maxWidth='lg'>
        <Typography variant='h5' component='h5' className='quote-header'>Quote</Typography>
        <form id='quote-form'>
          <Paper variant='outlined' elevation={3} className='paper' >
            <Box className='quote-content'>
              <TextareaAutosize aria-label="quote description" placeholder="Type here..." className='quote-text' />
              <ImageUploader />

            </Box>
            <Box mt={3}>
              <Typography variant='h6' component='h6'>Send to:</Typography>

              <FormControl className='shop-selector-container'>
                <InputLabel id="shops-selector" className='shop-selector-label'>Shops</InputLabel>
                <Select
                  labelId="demo-mutiple-name-label"
                  className='shop-selector'
                  multiple
                  value={selectedShop}
                  onChange={handleShopChange}
                  renderValue={selected => selected.join(', ')}
                  input={<Input />}
                >
                  {names.map(name => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={selectedShop.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl className='deliver-selector-container'>
                <InputLabel id="shops-selector" className='delivery-selector-label'>Delivery way</InputLabel>
                <Select
                  labelId="demo-mutiple-name-label"
                  className='delivery-selector'
                  value={deliveryWay}
                  onChange={handleDeliveryChange}
                >
                  <MenuItem value={1}>
                    <ListItemText primary={'Pickup'} />
                  </MenuItem>

                  <MenuItem value={0}>
                    <ListItemText primary={'Delivery'} />
                  </MenuItem>
                </Select>
              </FormControl>
              {deliveryWay ? <TextField id="pickup-location" label="Pickup location" /> : null}
            </Box>
            <Box display='flex' alignItems='center' justifyContent='flex-end'>
              <Button variant="contained" className='confirm-btn' >Confirm</Button>
              <Button variant="contained" color="primary" className='cancel-btn'>
                Cancel
              </Button>
            </Box>
          </Paper>
        </form>

      </Container>
    </div>
  )
};

export default Quote;