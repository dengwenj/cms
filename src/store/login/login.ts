import type { Module } from 'vuex'

import { accountLogin } from '@/network/login/login'

import type { IAccount } from '@/network/login/types'
import type { ILoginState } from './types'
import type { IRootState } from '../types'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {
    changeToken(state, token) {
      state.token = token
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      const res = await accountLogin(payload)
      const { id, token } = res.data
      commit('changeToken', token)
    },
    phoneLoginAction({ commit }, payload) {
      console.log(payload)
    }
  }
}

export default loginModule
