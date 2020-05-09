import AppLayout from '../layouts/LayoutApp';

import { Home, Banned, Universe } from './components';

export default [
  {
    path: '/app',
    component: AppLayout,
    routers: [
      {
        title: '主页',
        path: '/app/home',
        component: Home,
      },
      {
        title: '暂无权限',
        path: '/app/banned',
        component: Banned,
      },
      {
        title: '暂无权限',
        path: '/app/universe',
        component: Universe,
      },
      {
        title: '父子菜单',
        path: '/app/parent/children',
        component: Universe,
      },
    ],
  },
];
