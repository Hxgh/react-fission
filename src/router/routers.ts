import AppLayout from '../layouts/LayoutApp';

import { Home, ReduxTest, LifeCycle, Test, UploadTest } from './components';

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
        title: 'LifeCycle',
        path: '/app/LifeCycle',
        component: LifeCycle
      },
      {
        title: 'Test',
        path: '/app/test',
        component: Test
      },
      {
        title: 'UploadTest',
        path: '/app/UploadTest',
        component: UploadTest
      }
    ]
  }
];
