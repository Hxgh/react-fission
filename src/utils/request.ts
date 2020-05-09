import axios from 'axios';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getToken, removeToken } from './auth';
import config from '../config';
import { message } from 'antd';

NProgress.configure({
  showSpinner: false,
});

const request = axios.create({
  baseURL: config.baseURL,
  timeout: 5000,
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin': '*',
    // 'Content-Type': 'application/json',
    Authorization: 'Bearer ' + getToken(),
  },
});

request.interceptors.request.use(
  (config) => {
    NProgress.start();
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    NProgress.done();
    const res = response.data;
    if (response.status !== 200) {
      message.error(res.msg || '网络问题，请重新登陆或联系系统管理员。');
      return Promise.reject(res.data || 'Error');
    }
    return response.data;
  },
  (error: any) => {
    if (
      error &&
      typeof error === 'object' &&
      JSON.stringify(error).includes('401')
    ) {
      message.error('您的登陆信息已过期，请重新登陆。');
      setTimeout(() => removeToken(), 3000);
    } else if (
      error &&
      typeof error === 'object' &&
      JSON.stringify(error).includes('403')
    ) {
      message.error('你登陆的账号访问权限受限，请联系管理员');
    } else {
      message.error('网络问题，请重新登陆或联系系统管理员。');
    }
    NProgress.done();
    return Promise.reject(error);
  }
);

export default request;
