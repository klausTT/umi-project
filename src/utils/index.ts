export const getLoginState = () => {
  const state = localStorage.getItem('login');
  return state;
};
