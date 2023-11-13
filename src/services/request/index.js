import { request } from '@umijs/max';
import { baseUrl } from '../config';

class MyRequest {
  myRequest(url, config, method) {
    // console.log('config--------', config);
    // const stats = method === ('GET' || 'DELETE') ? 'params' : 'data';
    return request(baseUrl + url, {
      method,
      ...config,
    });
  }
  get(url, config) {
    return this.myRequest(config, 'GET');
  }
  post(url, config) {
    return this.myRequest(url, config, 'POST');
  }
  put(url, config) {
    return this.myRequest(url, config, 'PUT');
  }
  delete(url, config) {
    return this.myRequest(url, config, 'DELETE');
  }
}

export default new MyRequest();
