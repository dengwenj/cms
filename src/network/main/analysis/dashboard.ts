import dwjRequest from "@/network"

import type { IDataType } from '../../types'

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

export function getCategoryGoodsCount() {
  return dwjRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsCount
  })
}

export function getCategoryGoodsSale() {
  return dwjRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsSale
  })
}

export function getCategoryGoodsFavor() {
  return dwjRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsFavor
  })
}

export function addressGoodsSale() {
  return dwjRequest.get<IDataType>({
    url: DashboardAPI.addressGoodsSale
  })
}
