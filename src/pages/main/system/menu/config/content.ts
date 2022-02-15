const propList = [
  { prop: 'name', label: '菜单名称', },
  { prop: 'type', label: '类型', },
  { prop: 'url', label: '菜单url', },
  { prop: 'icon', label: '菜单icon', width: '100'  },
  { prop: 'permission', label: '按钮权限', width: '100'  },
  { prop: 'createAt', label: '创建时间', slotName: 'createAt' },
  { prop: 'updateAt', label: '更新时间', slotName: 'updateAt' },
  { label: '编辑', slotName: 'handle', width: '130' },
]

const contentTableConfig = {
  isShowIndexColumn: false,
  isShowSelectColumn: false,
  title: '用户列表',
  propList,
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  isShowFooter: false
}

export default contentTableConfig
