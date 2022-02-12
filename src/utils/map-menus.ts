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

  // 2 根据菜单需要添加的 routes
  const _recurseGetRoute = (userMenus: IUserMenus[]) => {
    for (const menu of userMenus) {
      if (menu.type === 2) {
        // 取到那个有的了
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) {
          routes.push(route)
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)

  return routes
}
