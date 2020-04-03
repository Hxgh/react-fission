import service from '../utils/request';

export const login = () => {
  return service.request({
    url: '/api/login',
    method: 'post'
  });
};
