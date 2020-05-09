import service from '../utils/request';

export const login = (data: object) => {
  return service.request({
    url: '/api/login',
    method: 'post',
    data: data,
  });
};

export const loginOut = () => {
  return service.request({
    url: '/api/LoginOut',
    method: 'post',
  });
};

export const getAccount = (params: object) => {
  return service.request({
    url: '/api/GetToken',
    method: 'GET',
    params: params,
  });
};
