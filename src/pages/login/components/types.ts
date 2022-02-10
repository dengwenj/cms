interface IObj {
  required?: boolean
  message?: string
  trigger?: 'blur' | 'change'
  pattern?: string
}

export interface IRules {
  name: IObj[]
  password: IObj[]
}
