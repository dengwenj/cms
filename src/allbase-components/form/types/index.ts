type IFormType = 'input' | 'password' | 'select' | 'datepicker'
export interface IFormItem {
  fieid: string
  type: IFormType
  label: string
  rules?: any[]
  placeheader?: string
  options?: any[] // select 里面 options 的属性
  otherOptions?: any // 特殊的属性
}

export interface IForm {
  formItem: IFormItem[]
  labelWidth?: string
  itemStyle?: Record<string, string>
  colLayout?: Record<string, number>
}
