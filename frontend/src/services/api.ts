import axios from 'axios';

const getUrl = (): string => {
  if (process.env.NODE_ENV === 'production') {
    return `https://app-behero.herokuapp.com`;
  }
  return 'http://localhost:3333';
};

const api = axios.create({
  baseURL: getUrl(),
});

const getToken = (): string => {
  const user = localStorage.getItem('@behero/user');
  if (user) {
    const { token } = JSON.parse(user);
    return `Bearer ${token}`;
  }

  return '';
};

api.interceptors.request.use((config) => {
  const token = config.headers.common['Authorization'];

  if (!token) {
    config.headers.common['Authorization'] = getToken();
  }

  return config;
});

export default api;
