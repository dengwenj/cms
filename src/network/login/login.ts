import dwjRequest from '..'

import type { IAccount } from './types'

enum LoginAPI {
  AccountLogin = '/login'
}

export const accountLogin = (account: IAccount) => {
  return dwjRequest.request({
    method: 'POST',
    url: LoginAPI.AccountLogin,
    data: account
  })
}
