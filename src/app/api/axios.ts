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

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
