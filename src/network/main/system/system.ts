import dwjRequest from "@/network"

import type { IQueryInfo } from '@/store/main/system/types'
import type { IDataType } from '../../types'

export const getPageListData = (url: string, queryInfo: IQueryInfo) => {
  return dwjRequest.request<IDataType>({
    method: 'POST',
    url,
    data: queryInfo
  })
}

export const deletePageData = (url: string) => {
  return dwjRequest.request({
    method: 'DELETE',
    url
  })
}

export const createPageData = (url: string, createData: any) => {
  return dwjRequest.request<IDataType>({
    method: 'POST',
    url,
    data: createData
  })
}

export const editPageData = (url: string, editData: any) => {
  return dwjRequest.request<IDataType>({
    method: 'PATCH',
    url,
    data: editData
  })
}
