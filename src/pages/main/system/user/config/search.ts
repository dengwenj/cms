import { IFormItem, IForm } from '@/allbase-components/form'

const formItem: IFormItem[] = [
  {
    fieid: 'name', // 字段
    type: 'input',
    label: '用户名',
    rules: [],
    placeheader: '请输入用户名'
  },
  {
    fieid: 'id',
    type: 'input',
    label: 'id',
    rules: [],
    placeheader: '请输入id'
  },
  {
    fieid: 'password',
    type: 'password',
    label: '密码',
    rules: [],
    placeheader: '请输入密码'
  },
  {
    fieid: 'dz',
    type: 'select',
    label: '哈哈哈',
    rules: [],
    placeheader: '用户名',
    options: [
      {
        title: 'dwj',
        value: '你好'
      },
      {
        title: 'zww',
        value: '你好啊'
      }
    ]
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
