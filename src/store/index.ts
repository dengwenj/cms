import { createStore } from 'vuex'

import loginModule from './login/login'

import type { IRootState } from './types'

// createStore 后面写的泛型就是 state 返回的对象的类型
const store = createStore<IRootState>({
  state() {
    return {
      name: 'dwj'
    }
  },
  modules: {
    login: loginModule
  }
})

export default store
