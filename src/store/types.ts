import type { ILoginState } from './login/types'
import type { ISystemState } from './main/system/types'
export interface IRootState {
  entireDepartment: any[]
  entirRole: any[]
  entirMenu: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

export type IStore = IRootState & IRootWithModule
