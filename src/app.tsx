// 运行时配置
import { InitDataType, RunTimeLayoutConfig } from '@umijs/max';
import { RightRender } from './components/layout';
import { getUserInfo, UserInfoItem } from './services/user';
import { getLoginState } from './utils';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export interface InitStateItem {
  name: string;
  userInfo?: UserInfoItem;
}

export async function getInitialState(): Promise<InitStateItem> {
  const userInfo = getLoginState() ? await getUserInfo() : undefined;
  return { name: '@umijs/max', userInfo };
}

export const layout: RunTimeLayoutConfig = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    rightRender: (init: InitDataType['initialState']) => (
      <RightRender init={init} />
    ),
    // 自定义 403 页面
    unAccessible: <div>unAccessible</div>,
    // 自定义 404 页面
    noFound: <div>noFound</div>,
  };
};

export async function render(oldRender: () => void) {
  if (getLoginState() || location.href.includes('login')) {
    oldRender();
  } else {
    location.href = '/login';
    oldRender();
  }
}
console.log(process.env.NODE_ENV);
