import axios from 'axios';

export const api = axios.create({
  baseURL: `https://app-behero.herokuapp.com`,
});
