import axios from 'axios';
import { NEXT_PUBLIC_API_URL } from '../constant';

const axiosInstance = axios.create({
  baseURL: `http://${NEXT_PUBLIC_API_URL}`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
