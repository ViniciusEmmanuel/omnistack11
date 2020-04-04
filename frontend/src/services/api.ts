import axios from 'axios';

const getUrl = (): string => {
  if (process.env.NODE_ENV === 'production') {
    return `https://app-behero.herokuapp.com`;
  }
  return 'http://localhost:3333';
};

const getToken = (): string => {
  const user = localStorage.getItem('@behero/user');
  if (user) {
    const { token } = JSON.parse(user);
    return `Bearer ${token}`;
  }

  return '';
};

const api = axios.create({
  baseURL: getUrl(),
  headers: {
    Authorization: getToken(),
  },
});

export default api;
