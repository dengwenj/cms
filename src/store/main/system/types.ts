export interface ISystemState {
  usersList: any[]
  usersCount: number
  roleList: any[]
  roleCount: number
  goodsList: any[]
  goodsCount: number
}

export interface IQueryInfo {
  offset: number
  size: number
}

export interface ISystemPayload {
  pageName: string
  queryInfo: IQueryInfo
}

export interface IUserList {
  cellphone?: number
  createAt?: string
  departmentId?: number
  enable?: number
  id?: number
  name?: string
  realname?: string
  roleId?: number
  updateAt?: string
}

export interface IRoleList {
  name?: string
  intro?: string
  createAt?: string
  updateAt?: string
}
