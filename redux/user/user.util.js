export const signInWithEmailAndPassword = async (email, password) => {
  const signInRequestUrl = 'https://centrade-api.herokuapp.com/login';
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "email": email,
      "password": password
    })
  };
  try {
    const fetchResponse = await fetch(signInRequestUrl, settings);
    const data = await fetchResponse.json();
    return data;
  } catch (e) {
    return e;
  }
};
