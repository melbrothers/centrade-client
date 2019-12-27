import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import { Typography, Grid, ButtonGroup, Button } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import './productList.styles.scss';

const products = [
  {
    'logo': 'https://media1.picsearch.com/is?1yx_dK9U-pyjmjbzm5qruFyVn4jUwVWlUec4wEQC9Qs&height=257',
    'productName': 'SKU WBF492130',
    'price': 7.150,
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque, sapien et bibendum placerat, erat odio mollis enim, vel varius nulla dolor nec enim. Integer vel arcu vel lacus feugiat elementum. Donec efficitur sodales enim, vel vulputate metus gravida nec. Sed imperdiet a urna nec vestibulum. Sed et felis arcu. Pellentesque euismod eleifend eros, a blandit lectus rutrum a. Vivamus quam dolor, elementum sit amet nisl vitae, malesuada ullamcorper justo. Aliquam convallis, massa et convallis imperdiet, odio justo sagittis metus, id egestas metus quam porta metus. Quisque libero tellus, venenatis vitae interdum sed, imperdiet eu purus. Morbi tempus commodo mollis. Aenean sed hendrerit ex. Integer eget dictum sem. Phasellus mauris urna, fringilla vitae sodales ac, auctor ac turpis.',
    'imageUrl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYfukA5Vkw_Syo6MHRervQGtedXGSHvoprZXtfrd3_FHCDoh6r0Q&s'
  },
  {
    'logo': 'https://media3.picsearch.com/is?dEBjQrS22suN0YN3R68HWo5fX3AAUyIxP2kzitGn1Rc&height=240',
    'productName': 'SKU WBF492131',
    'price': 7.150,
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque, sapien et bibendum placerat, erat odio mollis enim, vel varius nulla dolor nec enim. Integer vel arcu vel lacus feugiat elementum. Donec efficitur sodales enim, vel vulputate metus gravida nec. Sed imperdiet a urna nec vestibulum. Sed et felis arcu. Pellentesque euismod eleifend eros, a blandit lectus rutrum a. Vivamus quam dolor, elementum sit amet nisl vitae, malesuada ullamcorper justo. Aliquam convallis, massa et convallis imperdiet, odio justo sagittis metus, id egestas metus quam porta metus. Quisque libero tellus, venenatis vitae interdum sed, imperdiet eu purus. Morbi tempus commodo mollis. Aenean sed hendrerit ex. Integer eget dictum sem. Phasellus mauris urna, fringilla vitae sodales ac, auctor ac turpis.',
    'imageUrl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3AF2mM-ja3KYgVBvhoYEk_Ocag46FsetEmubwzmqvz6nDGLk_&s'
  },
  {
    'logo': 'https://media3.picsearch.com/is?R0HNK8njWgjoChOxlGicRNg6fQrHeHGag-HSaTTZR-M&height=216',
    'productName': 'SKU WBF492132',
    'price': 7.150,
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque, sapien et bibendum placerat, erat odio mollis enim, vel varius nulla dolor nec enim. Integer vel arcu vel lacus feugiat elementum. Donec efficitur sodales enim, vel vulputate metus gravida nec. Sed imperdiet a urna nec vestibulum. Sed et felis arcu. Pellentesque euismod eleifend eros, a blandit lectus rutrum a. Vivamus quam dolor, elementum sit amet nisl vitae, malesuada ullamcorper justo. Aliquam convallis, massa et convallis imperdiet, odio justo sagittis metus, id egestas metus quam porta metus. Quisque libero tellus, venenatis vitae interdum sed, imperdiet eu purus. Morbi tempus commodo mollis. Aenean sed hendrerit ex. Integer eget dictum sem. Phasellus mauris urna, fringilla vitae sodales ac, auctor ac turpis.',
    'imageUrl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKXv2vXfsVnKlBmup91DNywgxpgwk8d27fzCs1JXDDZgrhg11e&s'
  },
  {
    'logo': 'https://media4.picsearch.com/is?tej_qDHY8n-zcGf-_qAQLVZSYJZHsZ1Nx_oZKTir6vo&height=220',
    'productName': 'SKU WBF492133',
    'price': 7.150,
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque, sapien et bibendum placerat, erat odio mollis enim, vel varius nulla dolor nec enim. Integer vel arcu vel lacus feugiat elementum. Donec efficitur sodales enim, vel vulputate metus gravida nec. Sed imperdiet a urna nec vestibulum. Sed et felis arcu. Pellentesque euismod eleifend eros, a blandit lectus rutrum a. Vivamus quam dolor, elementum sit amet nisl vitae, malesuada ullamcorper justo. Aliquam convallis, massa et convallis imperdiet, odio justo sagittis metus, id egestas metus quam porta metus. Quisque libero tellus, venenatis vitae interdum sed, imperdiet eu purus. Morbi tempus commodo mollis. Aenean sed hendrerit ex. Integer eget dictum sem. Phasellus mauris urna, fringilla vitae sodales ac, auctor ac turpis.',
    'imageUrl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbsZ5vZUADGNLO8HrEh97LiRtKVh2kRP7Z5lkxaMyOIaGs6vc7&s'
  },
  {
    'logo': 'https://media3.picsearch.com/is?LFyWRAn1VFfAbcxz3kM0bqmUnEXiwJzJY18fEQhDo9I&height=210',
    'productName': 'SKU WBF492134',
    'price': 7.150,
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque, sapien et bibendum placerat, erat odio mollis enim, vel varius nulla dolor nec enim. Integer vel arcu vel lacus feugiat elementum. Donec efficitur sodales enim, vel vulputate metus gravida nec. Sed imperdiet a urna nec vestibulum. Sed et felis arcu. Pellentesque euismod eleifend eros, a blandit lectus rutrum a. Vivamus quam dolor, elementum sit amet nisl vitae, malesuada ullamcorper justo. Aliquam convallis, massa et convallis imperdiet, odio justo sagittis metus, id egestas metus quam porta metus. Quisque libero tellus, venenatis vitae interdum sed, imperdiet eu purus. Morbi tempus commodo mollis. Aenean sed hendrerit ex. Integer eget dictum sem. Phasellus mauris urna, fringilla vitae sodales ac, auctor ac turpis.',
    'imageUrl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNSXjpRt5txIC68lu_sSMF64PVVMIR6w5Tk3UEsbRhkMdlpNhR&s'
  },
  {
    'logo': 'https://media1.picsearch.com/is?9K0dZoMAJwKRUCQ8BSn8e3MCLmE1TnjaBtQBXzsw-Uw&height=240',
    'productName': 'SKU WBF492135',
    'price': 7.150,
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque, sapien et bibendum placerat, erat odio mollis enim, vel varius nulla dolor nec enim. Integer vel arcu vel lacus feugiat elementum. Donec efficitur sodales enim, vel vulputate metus gravida nec. Sed imperdiet a urna nec vestibulum. Sed et felis arcu. Pellentesque euismod eleifend eros, a blandit lectus rutrum a. Vivamus quam dolor, elementum sit amet nisl vitae, malesuada ullamcorper justo. Aliquam convallis, massa et convallis imperdiet, odio justo sagittis metus, id egestas metus quam porta metus. Quisque libero tellus, venenatis vitae interdum sed, imperdiet eu purus. Morbi tempus commodo mollis. Aenean sed hendrerit ex. Integer eget dictum sem. Phasellus mauris urna, fringilla vitae sodales ac, auctor ac turpis.',
    'imageUrl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyYKmNgUXU0wTUR1OSJ2gTdRCxo-FcrtDVProKlEYE2cRpo-rfVA&s'
  },
  {
    'logo': 'https://media1.picsearch.com/is?1yx_dK9U-pyjmjbzm5qruFyVn4jUwVWlUec4wEQC9Qs&height=257',
    'productName': 'SKU WBF492136',
    'price': 7.150,
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque, sapien et bibendum placerat, erat odio mollis enim, vel varius nulla dolor nec enim. Integer vel arcu vel lacus feugiat elementum. Donec efficitur sodales enim, vel vulputate metus gravida nec. Sed imperdiet a urna nec vestibulum. Sed et felis arcu. Pellentesque euismod eleifend eros, a blandit lectus rutrum a. Vivamus quam dolor, elementum sit amet nisl vitae, malesuada ullamcorper justo. Aliquam convallis, massa et convallis imperdiet, odio justo sagittis metus, id egestas metus quam porta metus. Quisque libero tellus, venenatis vitae interdum sed, imperdiet eu purus. Morbi tempus commodo mollis. Aenean sed hendrerit ex. Integer eget dictum sem. Phasellus mauris urna, fringilla vitae sodales ac, auctor ac turpis.',
    'imageUrl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbAPlelHmJG3D7TxDlsvJRzFhMkqWlCMIK09YXM2lW2ICpFL04Q&s'
  },
];

const ProductList = () => {
  return (
    <div className='product-list'>
      {
        products.map(product =>
          <div className='product-intro' key={product.productName}>
            <Avatar className='product-logo' alt="product image" src={product.logo} />
            <Typography variant='subtitle1' component='h5' className='product-name'>{product.productName}</Typography>
            <Typography variant='subtitle2' component='h6'>${product.price}</Typography>
            <Grid container>
              <Grid item xs={9}>
                <Typography variant='body2' component='p'>{product.description}</Typography>
              </Grid>
              <Grid item xs={3}>
                {
                  product.imageUrl ? <img src={product.imageUrl} alt='product image' /> : <Skeleton variant='rect' width={210} height={150} />
                }
              </Grid>
            </Grid>
            <div className='quantity'>
              <Typography variant='subtitle2' component='h6'>Quantity</Typography>
              <ButtonGroup aria-label="outlined primary button group">
                <Button>
                  <RemoveIcon />
                </Button>
                <Button>2</Button>
                <Button>
                  <AddIcon />
                </Button>
              </ButtonGroup>
            </div>

          </div>
        )
      }

    </div>
  );
}

export default ProductList;