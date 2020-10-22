import Axios from 'axios';

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const api = Axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
