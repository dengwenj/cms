<script setup lang="ts">
import { computed, onUpdated } from 'vue'

import { useStore } from '@/store'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import searchFormConfig from './config/search'
import contentTableConfig from './config/content'
import modalConfig from './config/modal'
import usePageSearch from '@/hooks/usePageSearch'
import usePageModal from '@/hooks/usePageModal'

const store = useStore()

// hook
const [pageContentRef, handleResetClick, handleSearchClick] = usePageSearch()

// 密码是否显示隐藏
const createCallback = () => {
  const passwordItem = modalConfig.formItem.find((item) => item.fieid === 'password')
  passwordItem!.isHidden = false
}
const editCallback = () => {
  const passwordItem = modalConfig.formItem.find((item) => item.fieid === 'password')
  passwordItem!.isHidden = true
}
// 当依赖发生改变的时候会执行里面的这个函数
const modalConfigRef = computed(() => {
  // 动态添加角色和部门的列表
  const departmentItem = modalConfig.formItem.find((item) => item.fieid === 'departmentId')
  departmentItem!.options = store.state.entireDepartment.map((item) => ({ title: item.name, value: item.id }))
  const roleItem = modalConfig.formItem.find((item) => item.fieid === 'roleId')
  roleItem!.options = store.state.entirRole.map((item) => ({ title: item.name, value: item.id }))
  return modalConfig
})
// usePageModal hook
const [
  pageModalRef,
  defaultInfo,
  handleCreateClick,
  handleEditClick
] = usePageModal(createCallback, editCallback)
</script>

<template>
  <div class="user">
    <PageSearch
      :searchFormConfig="searchFormConfig"
      @handleResetClick="handleResetClick"
      @handleSearchClick="handleSearchClick"
    />
    <div class="content">
      <PageContent
        ref="pageContentRef"
        :contentTableConfig="contentTableConfig"
        pageName="users"
        @handleCreateClick="handleCreateClick"
        @handleEditClick="handleEditClick"
      />
    </div>
    <PageModal
      ref="pageModalRef"
      :modalConfig="modalConfigRef"
      :defaultInfo="defaultInfo"
    />
  </div>
</template>
