import api from '../../src/api';
export const getCategoryList = async (token, pageNumber) => {
  const requestUrl = `/api/categories?page=${pageNumber}`;
  return api.get(requestUrl, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}


export const getProductList = async (token, categoryfilterQuery = '', pageNumber) => {
  const requestUrl = `/api/products?${categoryfilterQuery}&page=${pageNumber}`;
  return api.get(requestUrl, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}
