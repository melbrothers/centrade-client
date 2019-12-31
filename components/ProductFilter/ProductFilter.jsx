import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


import './productFilter.styles.scss';
import { useState } from 'react';

const ProductFilter = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  console.log(categories);

  const handleClick = (categoryId) => {
    if (categoryId) {
      if (selectedCategory && selectedCategory.id === categoryId) {
        setSelectedCategory({ 'id': categoryId, 'isOpen': false });
      } else {
        setSelectedCategory({ 'id': categoryId, 'isOpen': true });
      }
    }
  };
  return (
    <div className='product-filter'>

      {

        categories.map((category, index) => (
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
                  category.children.map(subCategory => (
                    <ListItem button className='category-list-nested-item' key={subCategory.id}>
                      <ListItemText primary={subCategory.title} className='category-list-item-text'> sub text</ListItemText>
                    </ListItem>
                  ))
                }
              </List>
            </Collapse>
          </List>

        ))
      }
    </div>
  )
};

export default ProductFilter;