import Cookies from 'js-cookie';

let inHalfADay = 1;

const TokenKey = 'USER_TOKEN';

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token: string) {
  return Cookies.set(TokenKey, token, {
    expires: inHalfADay
  });
}

export function removeToken() {
  Cookies.remove(TokenKey);
  window.location.reload();
}
