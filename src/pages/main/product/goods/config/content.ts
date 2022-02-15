const propList = [
  { prop: 'name', label: '商品名称', },
  { prop: 'oldPrice', label: '原价格', width: '70', slotName: 'oldPrice' },
  { prop: 'newPrice', label: '现价格', width: '70', slotName: 'newPrice' },
  { prop: 'imgUrl', label: '商品图片', slotName: 'imgUrl' },
  { prop: 'status', label: '状态', slotName: 'status' },
  { prop: 'createAt', label: '创建时间', slotName: 'createAt' },
  { prop: 'updateAt', label: '更新时间', slotName: 'updateAt' },
  { label: '编辑', width: '130', slotName: 'handle' },
]

const contentTableConfig = {
  isShowIndexColumn: true,
  isShowSelectColumn: true,
  title: '商品列表',
  propList
}

export default contentTableConfig
