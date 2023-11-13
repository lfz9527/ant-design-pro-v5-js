import myRequest from '@/services/request/index';
export async function login(data, options) {
  return myRequest.post('/admin/login', {
    headers: {
      'Content-Type': 'application/json',
    },
    data,
    // ...(options || {}),
  });
}

/**获取当前用户信息 post: /admin/getinfo*/
export function getUserInfo() {
  return myRequest.post('/admin/getinfo');
}

/**退出登录 post: /admin/logout */
export function outLogin() {
  return myRequest.post('/admin/logout');
}
