export interface IAccount {
  name: string
  password: string
}

export interface ILoginRes {
  id: number
  name: string
  token: string
}

export interface IDataType<T> {
  code: number
  data: T
}
