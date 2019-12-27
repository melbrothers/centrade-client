import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Subheader from '../components/Subheader/Subheader';

import '../styles/products.styls.scss';
import Searchbox from '../components/Searchbox/Searchbox';
import ProductFilter from '../components/ProductFilter/ProductFilter';
import ProductList from '../components/ProductList/ProductList';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

const Products = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className='products'>
      <Subheader />
      <Container className='products-section'>
        <Typography variant='h5' component="h3" gutterBottom>Products</Typography>
        <div className='products-tabs'>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Products" />
              <Tab label="Add Product" />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <ProductFilter />
                </Grid>
                <Grid item xs={8}>
                  <Searchbox />
                  <ProductList />
                </Grid>
              </Grid>

            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              Add Product
          </TabPanel>

          </SwipeableViews>
        </div>
      </Container>
    </div>
  )
};

export default Products;