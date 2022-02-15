import { IFormItem, IForm } from '@/allbase-components/form'

const formItem: IFormItem[] = [
  {
    fieid: 'name', // 字段
    type: 'input',
    label: '角色名称',
    rules: [],
    placeheader: '请输入角色名称'
  },
  {
    fieid: 'intro',
    type: 'input',
    label: '权限介绍',
    rules: [],
    placeheader: '请输入权限介绍'
  },
  {
    fieid: 'createTime',
    type: 'datepicker',
    label: '创建时间',
    rules: [],
    placeheader: '用户名',
    otherOptions: {
      'start-placeholder': '开始时间',
      'end-placeholder': '结束时间'
    }
  }
]
const labelWidth = '100px'
const itemStyle = {
  padding: '10px 40px'
}
const colLayout = {
  span: 8
}

const searchFormConfig: IForm = {
  formItem,
  labelWidth,
  itemStyle,
  colLayout
}

export default searchFormConfig
