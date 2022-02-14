const propList = [
  { prop: 'name', label: '姓名', },
  { prop: 'realname', label: '真实姓名', },
  { prop: 'cellphone', label: '手机号码', },
  { prop: 'enable', label: '状态', width: '100', slotName: 'enable'  },
  { prop: 'createAt', label: '创建时间', slotName: 'createAt' },
  { prop: 'updateAt', label: '更新时间', slotName: 'updateAt' },
  { label: '编辑', slotName: 'handle', width: '130' },
]

const contentTableConfig = {
  isShowIndexColumn: true,
  isShowSelectColumn: true,
  title: '用户列表',
  propList
}

export default contentTableConfig
