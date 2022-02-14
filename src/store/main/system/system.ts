import type { Module } from "vuex"

import { getPageListData } from "@/network/main/system/system"

import type { IRootState } from '../../types'
import type { ISystemState, ISystemPayload, IUserList } from './types'

const systemModule: Module<ISystemState,IRootState> = {
  namespaced: true,
  state() {
    return {
      userCount: 0,
      userList: []
    }
  },
  mutations: {
    changeList(state, list: IUserList[]) {
      state.userList = list
    },
    changeCount(state, count: number) {
      state.userCount = count
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: ISystemPayload) {
      // 对页面发送请求
      const pageListResult = await getPageListData(payload.pageUrl, payload.queryInfo)
      const { list, totalCount } = pageListResult.data
      commit('changeList', list)
      commit('changeCount', totalCount)
    }
  }
}

export default systemModule
