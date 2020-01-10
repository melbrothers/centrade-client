import api from '../../src/api';
export const getCategoryList = async (pageNumber) => {
  const requestUrl = `/api/categories?page=${pageNumber}`;
  return api.get(requestUrl);
}


export const getProductList = async (categoryfilterQuery = '', pageNumber) => {
  const requestUrl = `/api/products?${categoryfilterQuery}&page=${pageNumber}`;
  return api.get(requestUrl);
}

export const getProductListByPage = async (navUrl) => {
  return api.get(navUrl);
}

