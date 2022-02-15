import type { Module } from "vuex"

import { getPageListData } from "@/network/main/system/system"

import type { IRootState } from '../../types'
import type { ISystemState, ISystemPayload, IUserList, IRoleList } from './types'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    changeUserList(state, list: IUserList[]) {
      state.userList = list
    },
    changeUserCount(state, count: number) {
      state.userCount = count
    },
    changeRoleList(state, list: IRoleList[]) {
      state.roleList = list
    },
    changeRoleCount(state, count: number) {
      state.roleCount = count
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: ISystemPayload) {
      const { pageName } = payload
      let pageUrl = ''
      switch (pageName) {
        case 'user':
          pageUrl = '/users/list'
          break;
        case 'role':
          pageUrl = '/role/list'
          break
      }

      // 对页面发送请求
      const pageListResult = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageListResult.data

      commit(`change${pageName.substring(0, 1).toUpperCase() + pageName.substring(1)}List`, list)
      commit(`change${pageName.substring(0, 1).toUpperCase() + pageName.substring(1)}Count`, totalCount)
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'user':
            return state.userList
          case 'role':
            return state.roleList
        }
      }
    }
  }
}

export default systemModule
