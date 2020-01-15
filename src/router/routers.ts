import AppLayout from '../layouts/LayoutApp';

import { Home, ReduxTest, Test } from './components';

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
        title: 'Test',
        path: '/app/test',
        component: Test
      }
    ]
  }
];
