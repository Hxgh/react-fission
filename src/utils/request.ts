import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getToken, removeToken } from './auth';
import { message } from 'antd';

NProgress.configure({
  showSpinner: false
});

let baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:9527'
    : 'http://localhost:8008';

const request = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + getToken()
  }
});

request.interceptors.request.use(
  config => {
    NProgress.start();
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

request.interceptors.response.use(
  response => {
    NProgress.done();
    const res = response.data;
    if (response.status !== 200) {
      removeToken();
      message.warning('状态码非200');
      return Promise.reject(res || 'Error');
    }
    return response.data;
  },
  error => {
    NProgress.done();
    message.warning(error.message);
    return Promise.reject(error);
  }
);

export default request;
