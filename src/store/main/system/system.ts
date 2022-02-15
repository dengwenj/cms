import type { Module } from "vuex"

import { getPageListData } from "@/network/main/system/system"

import type { IRootState } from '../../types'
import type { ISystemState, ISystemPayload, IUserList, IRoleList } from './types'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  mutations: {
    changeUsersList(state, list: IUserList[]) {
      state.usersList = list
    },
    changeUsersCount(state, count: number) {
      state.usersCount = count
    },
    changeRoleList(state, list: IRoleList[]) {
      state.roleList = list
    },
    changeRoleCount(state, count: number) {
      state.roleCount = count
    },
    changeGoodsList(state, list: IRoleList[]) {
      state.goodsList = list
    },
    changeGoodsCount(state, count: number) {
      state.goodsCount = count
    },
    changeMenuList(state, list: IRoleList[]) {
      state.menuList = list
    },
    changeMenuCount(state, count: number) {
      state.menuCount = count
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: ISystemPayload) {
      const { pageName } = payload
      const pageUrl = `/${pageName}/List`
      // switch (pageName) {
      //   case 'user':
      //     pageUrl = '/users/list'
      //     break;
      //   case 'role':
      //     pageUrl = '/role/list'
      //     break
      // }

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
        return (state as any)[pageName + 'List'] ?? []
        // switch (pageName) {
        //   case 'user':
        //     return state.userList
        //   case 'role':
        //     return state.roleList
        // }
      }
    },
    pageCountData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`] ?? 0
      }
    }
  }
}

export default systemModule
