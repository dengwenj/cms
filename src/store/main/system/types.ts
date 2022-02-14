export interface ISystemState {
  userList: any[]
  userCount: number
}

export interface IQueryInfo {
  offset: number
  size: number
}

export interface ISystemPayload {
  pageUrl: string
  queryInfo: IQueryInfo
}

export interface IUserList {
  cellphone?: number
  createAt?: string
  deparmentId?: number
  enable?: number
  id?: number
  name?: string
  realname?: string
  roleId?: number
  updateAt?: string
}
