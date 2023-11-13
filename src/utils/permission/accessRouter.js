/**角色规则 */
export const UserRoleMap = {
  1: {
    text: '超级管理员',
  },
  2: {
    text: '全局审计员',
  },
  3: {
    text: '普通管理员',
  },
  4: {
    text: '平台审计员',
  },
  5: {
    text: '部门操作员',
  },
  // 6: {
  //   text: '普通用户',
  // },
};
//不同权限的路由名单
export const getRoutesMap = (value) => {
  return value === 1
    ? ['User', 'Login', 'Home', 'MainConsole']
    : value === 2
    ? ['User', 'Login']
    : value === 3
    ? ['User', 'Login']
    : value === 4
    ? ['User', 'Login']
    : ['User', 'Login'];
};
