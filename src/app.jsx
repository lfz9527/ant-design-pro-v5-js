import { AvatarDropdown, AvatarName, Footer, Question, SelectLang } from '@/components';
// import { currentUser as queryCurrentUser } from '@/services/ant-design-pro/api';
import { getUserInfo as queryCurrentUser } from '@/services/module/login';
import { LinkOutlined } from '@ant-design/icons';
import { Link, history } from '@umijs/max';
import defaultSettings from '../config/defaultSettings';
import { errorConfig } from './requestErrorConfig';
import { getToken } from './utils/token';
const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState() {
  // 请求用户数据
  const fetchUserInfo = async () => {
    try {
      // const msg = await queryCurrentUser({
      //   skipErrorHandler: true,
      // });
      const res = await queryCurrentUser();
      // console.log('res----', res);
      return res.data;
    } catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };
  // 返回用户数据
  const returnUserInfo = async () => {
    const currentUser = await fetchUserInfo();
    // console.log('currentUser----', currentUser);
    return {
      fetchUserInfo,
      currentUser: { ...currentUser, name: currentUser.username },
      settings: defaultSettings,
    };
  };
  const { location } = history;
  const tokenKey = getToken();
  // 如果已经有token了，跳转登录页面无效
  if (location.pathname === loginPath && tokenKey) {
    history.push('/Home/MainConsole');
    const userInfo = await returnUserInfo();
    return userInfo;
  }

  // 如果不是登录页面，执行
  if (location.pathname !== loginPath) {
    const userInfo = await returnUserInfo();
    return userInfo;
    // const currentUser = await fetchUserInfo();
    // // console.log('currentUser----', currentUser);
    // return {
    //   fetchUserInfo,
    //   currentUser: { ...currentUser, name: currentUser.username },
    //   settings: defaultSettings,
    // };
  }
  return {
    fetchUserInfo,
    settings: defaultSettings,
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout = ({ initialState, setInitialState }) => {
  return {
    actionsRender: () => [<Question key="doc" />, <SelectLang key="SelectLang" />],
    avatarProps: {
      src: initialState?.currentUser?.avatar,
      title: <AvatarName />,
      render: (_, avatarChildren) => {
        return <AvatarDropdown>{avatarChildren}</AvatarDropdown>;
      },
    },
    waterMarkProps: {
      content: initialState?.currentUser?.username,
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    bgLayoutImgList: [
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr',
        left: 85,
        bottom: 100,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/C2TWRpJpiC0AAAAAAAAAAAAAFl94AQBr',
        bottom: -68,
        right: -45,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/F6vSTbj8KpYAAAAAAAAAAAAAFl94AQBr',
        bottom: 0,
        left: 0,
        width: '331px',
      },
    ],
    links: isDev
      ? [
          <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>OpenAPI 文档</span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    // childrenRender: (children) => {
    //   // if (initialState?.loading) return <PageLoading />;
    //   return (
    //     <>
    //       {children}
    //       {isDev && (
    //         <SettingDrawer
    //           disableUrlParams
    //           enableDarkTheme
    //           settings={initialState?.settings}
    //           onSettingChange={(settings) => {
    //             setInitialState((preInitialState) => ({
    //               ...preInitialState,
    //               settings,
    //             }));
    //           }}
    //         />
    //       )}
    //     </>
    //   );
    // },
    ...initialState?.settings,
  };
};

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request = {
  ...errorConfig,
};
