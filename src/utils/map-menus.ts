import type { RouteRecordRaw } from 'vue-router'

import type { IUserMenus } from './types'
import type { Ibreadcrumb } from '@/allbase-components/breadcrumb/types'

let firstMenu: IUserMenus | null = null

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
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)

  return routes
}

export function pathMapBreadcrumbs(userMenus: IUserMenus[], currentPath: string) {
  const breadcrumbs: Ibreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

export function pathMapToMenu(
  userMenus: IUserMenus[],
  currentPath: string,
  breadcrumbs?: Ibreadcrumb[]
): IUserMenus | undefined {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

// 权限
export function mapMenusToPermissions(userMenus: IUserMenus[]) {
  const permissions: string[] = []

  const _recurseGetRoute = (menus: IUserMenus[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetRoute(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetRoute(userMenus)

  return permissions
}

export {
  firstMenu
}
