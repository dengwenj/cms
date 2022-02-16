import { ref } from "vue"

import type { Ref } from 'vue'

import PageModal from "@/components/page-modal"

export default function usePageModal(): [Ref, Ref, () => void, (item: any) => void] {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})

  // 点击新建
  const handleCreateClick = () => {
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
    }
  }
  // 点击编辑
  const handleEditClick = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
    }
  }

  return [pageModalRef, defaultInfo, handleCreateClick, handleEditClick]
}

