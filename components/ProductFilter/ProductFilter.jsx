import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { getCategoryStart, getProductsStart } from '../../redux/product/product.actions';

import Router from 'next/router';

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';

import './productFilter.styles.scss';
import { useState } from 'react';

const ProductFilter = ({ categories, currentUser, getProductListStart, getCategoryListStart }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [checkedChildren, setCheckedChildren] = useState([]);
  const handleClick = (categoryId) => {
    if (categoryId) {
      if (selectedCategory && selectedCategory.id === categoryId) {
        if (selectedCategory.isOpen) {
          setSelectedCategory({ 'id': categoryId, 'isOpen': false });
        } else {
          setSelectedCategory({ 'id': categoryId, 'isOpen': true });
        }
      } else {
        setSelectedCategory({ 'id': categoryId, 'isOpen': true });
      }
    }
  };

  const handleClickSubCategoryFilter = (subcatId) => {
    const currentChildrenIndex = checkedChildren.indexOf(subcatId);
    let childrenChecked = [...checkedChildren];

    if (currentChildrenIndex === -1) {
      childrenChecked.push(subcatId);
    } else {
      childrenChecked = childrenChecked.splice(subcatId, 1);
    }

    setCheckedChildren(childrenChecked);
    console.log(childrenChecked);

    if (childrenChecked.length === 0) {
      Router.push(`/products`);
    }

    if (childrenChecked.length === 1) {
      Router.push(`/products?category.id=${subcatId}`);
    }

    if (childrenChecked.length > 1) {
      let query = '';
      childrenChecked.map(checkedNumber => {
        query = query.concat(`category.id[]=${checkedNumber}&`);

      });
      Router.push(`/products?${query.slice(0, -1)}`);
    }


  };

  return (
    <div className='product-filter'>
      {
        categories.map((category, index) => {
          return (
            <List
              className='category-list'
              component="nav"
              aria-labelledby="category-header"
              key={index}
              subheader={
                index === 0 ?
                  <ListSubheader component="div" id="category-header" className='category-list-header'>
                    Category
                  </ListSubheader> : null
              }
            >
              <ListItem
                button
                className='catetory-list-item'
                key={category.id}
                onClick={() => handleClick(category.id)}
              >

                <ListItemText primary={category.title} className='category-list-item-text' />
                {
                  selectedCategory && selectedCategory.id === category.id && selectedCategory.isOpen ? <ExpandLess /> : <ExpandMore />
                }
              </ListItem>
              <Collapse in={selectedCategory && selectedCategory.id === category.id && selectedCategory.isOpen} timeout="auto" unmountOnExit >
                <List component="div" disablePadding>
                  {
                    category.children.map((subCategory, index) => {
                      const labelId = `filter-checkbox-label-${index}`;

                      return (
                        <ListItem button className='category-list-nested-item' key={subCategory.id} >
                          <ListItemIcon>
                            <Checkbox
                              onChange={() => handleClickSubCategoryFilter(subCategory.id)}
                              color='primary'
                              edge="start"
                              checked={checkedChildren.indexOf(subCategory.id) !== -1}
                              tabIndex={-1}
                              disableRipple
                              inputProps={{ 'aria-labelledby': labelId }}
                            />
                          </ListItemIcon>
                          <ListItemText primary={subCategory.title} className='category-list-item-text' id={labelId}> sub text</ListItemText>
                        </ListItem>
                      )
                    })
                  }
                </List>
              </Collapse>
            </List>

          )
        })
      }
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  getCategoryListStart: (token) => dispatch(getCategoryStart({ token })),
  getProductListStart: (token) => dispatch(getProductsStart({ token }))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductFilter);