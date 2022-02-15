import { IFormItem, IForm } from '@/allbase-components/form'

const formItem: IFormItem[] = [
  {
    fieid: 'id',
    type: 'input',
    label: 'id',
    placeheader: '请输入id'
  },
  {
    fieid: 'name', // 字段
    type: 'input',
    label: '用户名',
    placeheader: '请输入用户名'
  },
  {
    fieid: 'realname',
    type: 'input',
    label: '真实姓名',
    placeheader: '请输入真实姓名'
  },
  {
    fieid: 'cellphone',
    type: 'input',
    label: '电话号码',
    placeheader: '请输入电话号码'
  },
  {
    fieid: 'enable',
    type: 'select',
    label: '用户状态',
    placeheader: '请选择用户状态',
    options: [
      {
        title: '启用',
        value: 1
      },
      {
        title: '禁用',
        value: 0
      }
    ]
  },
  {
    fieid: 'createAt',
    type: 'datepicker',
    label: '创建时间',
    otherOptions: {
      'start-placeholder': '开始时间',
      'end-placeholder': '结束时间',
      type: 'daterange'
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
