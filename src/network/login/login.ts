import dwjRequest from '..'

import type { IAccount, IDataType, ILoginRes } from './types'

enum LoginAPI {
  AccountLogin = '/login'
}

export const accountLogin = (account: IAccount) => {
  return dwjRequest.request<IDataType<ILoginRes>>({
    method: 'POST',
    url: LoginAPI.AccountLogin,
    data: account
  })
}
