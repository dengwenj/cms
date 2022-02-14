import { createStore, useStore as useVuexStore } from 'vuex'
import type { Store } from 'vuex'

import login from './login/login'
import system from './main/system/system'
import localCatch from '@/utils/cache'

import type { IRootState, IStore } from './types'

// createStore 后面写的泛型就是 state 返回的对象的类型
const store = createStore<IRootState>({
  state() {
    return {
      name: 'dwj'
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
}

// 自己封闭 useStore 方便使用类型  Store<IStore>
export function useStore(): Store<IStore> {
  return useVuexStore()
}

export default store
