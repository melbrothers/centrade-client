import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import productReducer from "./product/product.reducer";
import cartReducer from "./cart/cart.reducer";
import orderReducer from "./order/order.reducer";
import quoteReducer from "./quote/quote.reducer";
import supplierReducer from "./supplier/supplier.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
  order: orderReducer,
  quote: quoteReducer,
  supplier: supplierReducer
});

export default rootReducer;
