import { IForm, IFormItem } from '../../../../../allbase-components/form/types'

const formItem: IFormItem[] = [
  {
    fieid: 'name',
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
    fieid: 'password',
    type: 'password',
    label: '密码',
    placeheader: '请输入密码',
    isHidden: true
  },
  {
    fieid: 'cellphone',
    type: 'input',
    label: '电话号码',
    placeheader: '请输入电话号码'
  },
  {
    fieid: 'departmentId',
    type: 'select',
    label: '选择部门',
    placeheader: '请选择部门',
    options: []
  },
  {
    fieid: 'roleId',
    type: 'select',
    label: '选择角色',
    placeheader: '请选择角色',
    options: []
  }
]

const modalConfig: IForm = {
  formItem,
  colLayout: { span: 24 },
  itemStyle: {}
}

export default modalConfig
