import {
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getCategoryGoodsSale,
  addressGoodsSale
} from '@/network/main/analysis/dashboard'

import type { Module } from 'vuex'

import type { IRootState } from '../../types'
import type { IDashboardState } from './types'

const dashboard: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsFavor: [],
      categoryGoodsSale: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list
    }
  },
  actions: {
    async getCategoryGoods({ commit }) {
      const res1 = await getCategoryGoodsCount()
      commit('changeCategoryGoodsCount', res1.data)
      const res2 = await getCategoryGoodsSale()
      commit('changeCategoryGoodsSale', res2.data)
      const res3 = await getCategoryGoodsFavor()
      commit('changeCategoryGoodsFavor', res3.data)
      const res4 = await addressGoodsSale()
      commit('changeAddressGoodsSale', res4.data)
    }
  }
}

export default dashboard
