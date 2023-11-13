// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 登录接口 POST /api1/server/v1/login */
export async function login(body, options) {
  return request('/api1/server/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发送验证码 POST /api/login/captcha */
// export async function getFakeCaptcha(params, options) {
//   return (
//     request <
//     API.FakeCaptcha >
//     ('/api/login/captcha',
//     {
//       method: 'GET',
//       params: {
//         ...params,
//       },
//       ...(options || {}),
//     })
//   );
// }
