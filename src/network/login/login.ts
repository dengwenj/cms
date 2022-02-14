import dwjRequest from '..'

import type { IDataType } from '../types'
import type { IAccount, ILoginRes } from './types'

enum LoginAPI {
  AccountLogin = '/login',
  UserInfo = '/users/',
  UserMenus = '/role/'
}

export const accountLogin = (account: IAccount) => {
  return dwjRequest.request<IDataType<ILoginRes>>({
    method: 'POST',
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export const userInfoRequest = (id: number) => {
  return dwjRequest.request<IDataType>({
    method: 'GET',
    url: LoginAPI.UserInfo + id,
    showLoading: false
  })
}

export const userMenusRequest = (id: number) => {
  return dwjRequest.request<IDataType>({
    method: 'GET',
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
