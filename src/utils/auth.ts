import Cookies from 'js-cookie';

export let inHalfADay = 1 / 24;

const tokenKey = 'TOKEN_KEY';
const userKey = 'USER_KEY';

export function getToken() {
  return Cookies.get(tokenKey);
}

export function setToken(token: string) {
  return Cookies.set(tokenKey, token, {
    expires: inHalfADay,
  });
}

export function removeToken() {
  Cookies.remove(tokenKey);
  removeUser();
  window.location.reload();
}

export function getUser() {
  const user: string | undefined = Cookies.get(userKey);
  return JSON.parse(user || '{}');
}
export function setUser(user: Object) {
  return Cookies.set(userKey, user, {
    expires: inHalfADay,
  });
}

export function removeUser() {
  Cookies.remove(userKey);
  window.location.reload();
}
