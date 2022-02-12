import type { RouteRecordRaw } from 'vue-router'

import type { IUserMenus } from './types'

export function mapMenusToRoutes(userMenus: IUserMenus[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1 先去加载所有的 routes
  const allRoutes: RouteRecordRaw[] = []
  // require.context webpack 里面的
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    // key 是 main 下面的当前路径 比如： ./analysis/dashboard/dashboard.ts
    // routeModule 拿到的是每一个模块
    const routeModule = require('../router/main' + key.split('.')[1])
    allRoutes.push(routeModule.default)
  })
  console.log(allRoutes)

  // 2 根据菜单需要添加的 routes

  return routes
}
