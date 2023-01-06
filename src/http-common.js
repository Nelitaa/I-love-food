import axios from 'axios';

export default axios.create({
  baseURL: 'https://themealdb.com/api',
  headers: {
    'Content-type': 'application/json',
  },
});
