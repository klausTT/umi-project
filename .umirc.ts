import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },

  routes: [
    {
      path: '/login',
      component: './login',
      menuRender: false,
    },

    {
      path: '/',
      redirect: '/home',
    },

    {
      name: '首页',
      path: '/home',
      component: './home',
      layout: 'mix',
    },

    {
      name: '权限演示',
      path: '/access',
      component: './access',
      layout: 'mix',
      access: 'canSeeAdmin',
    },
  ],

  npmClient: 'pnpm',
  tailwindcss: {},
});
