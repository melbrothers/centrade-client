import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import productReducer from './product/product.reducer';
import cartReducer from './cart/cart.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer
});

export default rootReducer;