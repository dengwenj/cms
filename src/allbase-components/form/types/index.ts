type IFormType = 'input' | 'password' | 'select' | 'datepicker'
export interface IFormItem {
  type: IFormType
  label: string
  rules?: any[]
  placeheader?: string
  options?: any[] // select 里面 options 的属性
  otherOptions?: any // 特殊的属性
}
