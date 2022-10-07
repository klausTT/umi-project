import newRequest from '@/utils/request';

export interface LoginPorps {
  username: string;
  password: string;
}

export interface UserInfoItem {
  username: string;
  role: string[];
}

export const isLogin = () => {
  return newRequest<boolean>('api/auth', {
    method: 'GET',
  });
};

export const login = (data: LoginPorps) => {
  return newRequest<LoginPorps>('api/login', {
    method: 'POST',
    data,
  });
};

export const logout = () => {
  return newRequest('api/logout', {
    method: 'PUT',
  });
};

export const getUserInfo = () => {
  const loginInfo: LoginPorps = JSON.parse(localStorage.getItem('login') || '');
  const isAdmin = loginInfo.username === 'admin';
  return {
    username: loginInfo.username,
    role: isAdmin ? ['admin'] : [],
  };

  return newRequest<UserInfoItem>('api/userInfo', {
    method: 'GET',
  });
};
