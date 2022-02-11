import type { Module } from 'vuex'

import type { ILoginState } from './types'
import type { IRootState } from '../types'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: ''
    }
  },
  actions: {
    accountLoginAction({ commit }, payload) {
      console.log(payload)
    },
    phoneLoginAction({ commit }, payload) {
      console.log(payload)
    }
  },
  mutations: {}
}

export default loginModule
