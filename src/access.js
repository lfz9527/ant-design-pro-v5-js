/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */

import { getRoutesMap } from './utils/permission/accessRouter';

export default function access(initialState) {
  // console.log('initialState', initialState);
  const { currentUser } = initialState ?? {};
  return {
    canDisplay: (route) => {
      // console.log('route---', route);
      const hasRoutes = getRoutesMap(initialState?.currentUser?.super);
      return hasRoutes.includes(route?.name);
    },
    // canAdmin: currentUser && currentUser.access === 'admin',
  };
}
