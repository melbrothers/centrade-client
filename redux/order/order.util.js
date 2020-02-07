import api from '../../src/api';

export const getLastOrders = () => {
  const getOrdersUrl = '/api/orders';

}

export const placeOrder = async (cartItems) => {
  const placeOrderUrl = '/api/orders';
  const orderItems = [];
  if (cartItems.length) {
    cartItems.map(item => {
      let itemObj = {};
      itemObj.product = `api/products/${item.id}`;
      itemObj.quantity = item.quantity;
      orderItems.push(itemObj);
    });
  }
  return api.post(placeOrderUrl, JSON.stringify({
    "order_items": orderItems
  }));
};