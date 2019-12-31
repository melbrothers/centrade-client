export const getCategoryList = async (token, pageNumber) => {
  const requestUrl = `https://centrade-api.herokuapp.com/api/categories?page=${pageNumber}`;
  const settings = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  };
  try {
    const fetchResponse = await fetch(requestUrl, settings);
    const data = await fetchResponse.json();
    return data;
  } catch (e) {
    return e;
  }
};
