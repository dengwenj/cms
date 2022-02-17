import { createStore, useStore as useVuexStore } from 'vuex'
import type { Store } from 'vuex'

import login from './login/login'
import system from './main/system/system'
import localCatch from '@/utils/cache'
import { getPageListData } from '@/network/main/system/system'
import type { IRootState, IStore } from './types'

// createStore 后面写的泛型就是 state 返回的对象的类型
const store = createStore<IRootState>({
  state() {
    return {
      entireDepartment: [],
      entirRole: [],
      entirMenu: []
    }
  },
  mutations: {
    changeDepartment(state, list) {
      state.entireDepartment = list
    },
    changeRole(state, list) {
      state.entirRole = list
    },
    changeMenu(state, list) {
      state.entirMenu = list
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      const departmentResult = await getPageListData('/department/list', { offset: 0, size: 1000 })
      const { list: departmentList } = departmentResult.data
      const roleResult = await getPageListData('/role/list', { offset: 0, size: 1000 })
      const { list: roleList } = roleResult.data

      // 菜单
      const menuResult = await getPageListData('/menu/list', {})
      const { list: menuList } = menuResult.data

      commit('changeDepartment', departmentList)
      commit('changeRole', roleList)
      commit('changeMenu', menuList)
    }
  },
  modules: {
    login,
    system
  }
})

// 一上来就要调一次
export function setupStore() {
  store.dispatch('login/accountLoginAction', {
    name: localCatch.getCache('name'),
    password: localCatch.getCache('password')
  })
  // store.dispatch('getInitialDataAction')
}

// 自己封闭 useStore 方便使用类型  Store<IStore>
export function useStore(): Store<IStore> {
  return useVuexStore()
}

export default store
