import dwjRequest from '..'

import type { IAccount, IDataType, ILoginRes } from './types'

enum LoginAPI {
  AccountLogin = '/login',
  UserInfo = '/users/'
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
    url: LoginAPI.UserInfo + id
  })
}
