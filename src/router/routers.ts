import AppLayout from '../layouts/LayoutApp';

import { Home, ReduxTest, RouterTest } from './components';

export default [
  {
    path: '/app',
    component: AppLayout,
    routers: [
      {
        title: '主页',
        path: '/app/home',
        component: Home
      },
      {
        title: 'ReduxTest',
        path: '/app/ReduxTest',
        component: ReduxTest
      },
      {
        title: 'RouterTest',
        path: '/app/RouterTest',
        component: RouterTest
      }
    ]
  }
];
