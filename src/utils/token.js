export function setToken(token) {
  window.localStorage.setItem('token', token);
  // window.localStorage.setItem('expire', moment(expire).format('YYYY-MM-DD HH:mm:ss'));
  // console.log(window.localStorage);
}

export function getToken() {
  // const nowTime = new Date().getTime();
  // if (window.localStorage.getItem('expire')) {
  //   const expireTime = Date.parse(window.localStorage.getItem('expire'));
  //   // console.log(window.localStorage.getItem('expire'));
  //   if (nowTime < expireTime) {
  //     // message.success('登录未过期')
  //     return window.localStorage.getItem('token');
  //   } else {
  //     removeToken();
  //     message.warning('登录过期，请重新登录!');
  //     return null;
  //   }
  // } else {
  //   return null;
  // }
  const token = window.localStorage.getItem('token');
  if (token) {
    return token;
  } else {
    return null;
  }
}

export function removeToken() {
  window.localStorage.removeItem('token');
  // window.localStorage.removeItem('expire');
  // console.log(window.localStorage)
}
