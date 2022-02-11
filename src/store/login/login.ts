import type { Module } from 'vuex'

import { accountLogin, userInfoRequest } from '@/network/login/login'
import  localCatch from '@/utils/cache'

import type { IAccount } from '@/network/login/types'
import type { ILoginState } from './types'
import type { IRootState } from '../types'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: localCatch.getCache('token') ?? '',
      userInfo: localCatch.getCache('userInfo') ?? {}
    }
  },
  mutations: {
    changeToken(state, token) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 登录
      const loginRes = await accountLogin(payload)
      const { id, token } = loginRes.data
      localCatch.setCache('token', token)
      commit('changeToken', token)

      // 用户信息
      const userInfoRes = await userInfoRequest(id)
      const userInfo = userInfoRes.data
      localCatch.setCache('userInfo', userInfo)
      commit('changeUserInfo', userInfo)
    },
    phoneLoginAction({ commit }, payload) {
      console.log(payload)
    }
  }
}

export default loginModule
