import { IForm, IFormItem } from '@/allbase-components/form/types'

const formItem: IFormItem[] = [
  {
    fieid: 'name',
    type: 'input',
    label: '角色名',
    placeheader: '请输入角色名'
  },
  {
    fieid: 'intro',
    type: 'input',
    label: '角色介绍',
    placeheader: '请输入角色介绍'
  }
]

const modalConfig: IForm = {
  formItem,
  colLayout: { span: 24 },
  itemStyle: {}
}

export default modalConfig
