import type { Module } from 'vuex'

import router from '@/router'
import { accountLogin, userInfoRequest, userMenusRequest } from '@/network/login/login'
import  localCatch from '@/utils/cache'

import type { IAccount } from '@/network/login/types'
import type { ILoginState } from './types'
import type { IRootState } from '../types'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: localCatch.getCache('token') ?? '',
      userInfo: localCatch.getCache('userInfo') ?? {},
      userMenus: localCatch.getCache('userMenus') ?? []
    }
  },
  mutations: {
    changeToken(state, token) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
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

      // 请求用户菜单
      const userMenusRes = await userMenusRequest(userInfo.role.id)
      const userMenus = userMenusRes.data
      localCatch.setCache('userMenus', userMenus)
      commit('changeUserMenus', userMenus)

      // 跳转到首页
      router.push('/main')
    },
    phoneLoginAction({ commit }, payload) {
      console.log(payload)
    }
  }
}

export default loginModule
