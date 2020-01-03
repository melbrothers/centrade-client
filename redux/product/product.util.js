import api from '../../src/api';
export const getCategoryList = async (token, pageNumber) => {
  const requestUrl = `/api/categories?page=${pageNumber}`;
  return api.get(requestUrl, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}


export const getProductList = async (token, pageNumber) => {
  const requestUrl = `/api/products?page=${pageNumber}`;
  return api.get(requestUrl, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}
