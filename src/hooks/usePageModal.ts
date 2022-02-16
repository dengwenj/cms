import { ref } from "vue"

import type { Ref } from 'vue'

import PageModal from "@/components/page-modal"

type CallBackFn = () => void
type Tuple = [Ref, Ref, () => void, (item: any) => void]

export default function usePageModal(createCb?: CallBackFn, editCb?: CallBackFn): Tuple {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})

  // 点击新建
  const handleCreateClick = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
    }
    // 当有值的时候调用
    createCb?.()
  }
  // 点击编辑
  const handleEditClick = (item: any) => {
    console.log(item)

    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
    }
    // 当有值的时候调用
    editCb?.()
  }

  return [pageModalRef, defaultInfo, handleCreateClick, handleEditClick]
}

