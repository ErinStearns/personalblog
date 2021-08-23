import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://erinstearnsblog.herokuapp.com/api/',
});
