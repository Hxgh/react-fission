import { getUser } from './auth';

export const roleFilter = function (
  key: string | Array<string>,
  isMenu?: boolean
): boolean {
  const user: any = getUser();
  let role: Array<string> = isMenu
    ? user.modulePermissionList
    : [...user.modulePermissionList, ...user.operationPermissionList];
  if (!key || role.length === 0) return true;
  if (typeof key === 'string') {
    return role.includes(key);
  }
  return key.some((i: string) => role.includes(i));
};

export const downloadFile = (url: string) => {
  const iframe: any = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.style.height = 0;
  iframe.src = url;
  document.body.appendChild(iframe);
  setTimeout(() => {
    iframe.remove();
  }, 60000);
};
