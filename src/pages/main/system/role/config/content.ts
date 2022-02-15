const propList = [
  { prop: 'name', label: '角色名', },
  { prop: 'intro', label: '权限介绍', },
  { prop: 'createAt', label: '创建时间', slotName: 'createAt' },
  { prop: 'updateAt', label: '更新时间', slotName: 'updateAt' },
  { label: '编辑', slotName: 'handle', width: '130' },
]

const contentTableConfig = {
  isShowIndexColumn: true,
  isShowSelectColumn: true,
  title: '角色列表',
  propList
}

export default contentTableConfig
