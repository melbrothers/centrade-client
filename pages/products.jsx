import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useRouter } from 'next/router';

import { selectCurrentUser } from '../redux/user/user.selectors';
import { selectCurrentCategories, selectCurrentProducts, selectCurrentProductsPageView } from '../redux/product/product.selectors';

import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Subheader from '../components/Subheader/Subheader';
import Searchbox from '../components/Searchbox/Searchbox';
import ProductFilter from '../components/ProductFilter/ProductFilter';
import ProductList from '../components/ProductList/ProductList';

import { getCategoryStart, getProductsStart } from '../redux/product/product.actions';
import '../styles/products.styls.scss';
import Banner from '../components/Banner/Banner';
import Pagination from '../components/Pagination/Pagination';

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

const Products = ({ currentUser, getCategoryListStart, getProductListStart, currentCategories, currentProducts, currentProductsPageView }) => {
  console.log(currentProducts);
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const router = useRouter();
  useEffect(() => {

    async function runProducts() {
      await getCategoryListStart(currentUser);
      await getProductListStart(currentUser);
    }
    runProducts();

  }, [currentUser]);

  // const handleRouterComplete = async (url) => {
  //   // const param = window.location.search.slice(1);
  //   if (url.indexOf('category.id') > -1) {
  //     console.log(url);
  //     await getProductListStart(currentUser);
  //   }

  //   Router.events.off('routeChangeComplete', handleRouterComplete);
  // }

  // Router.events.on('routeChangeComplete', handleRouterComplete);

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
        <Typography variant='h5' component="h3" gutterBottom>Home</Typography>
        <Banner imageUrl="https://www.huafone.com/wp-content/uploads/2019/09/Kit3-Web-Banner-1024x320.png" />
        <div className='products-tabs'>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              {currentCategories ? <ProductFilter categories={currentCategories} /> : null}
            </Grid>
            <Grid item xs={8}>
              <Searchbox />
              {currentProducts ? <ProductList products={currentProducts} /> : null}
              <Pagination pageView={currentProductsPageView} />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  currentCategories: selectCurrentCategories,
  currentProducts: selectCurrentProducts,
  currentProductsPageView: selectCurrentProductsPageView
});

const mapDispatchToProps = dispatch => ({
  getCategoryListStart: (token) => dispatch(getCategoryStart({ token })),
  getProductListStart: (token) => dispatch(getProductsStart({ token }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);