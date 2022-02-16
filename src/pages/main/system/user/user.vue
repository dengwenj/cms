<script setup lang="ts">
import { ref } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import searchFormConfig from './config/search'
import contentTableConfig from './config/content'
import usePageSearch from '@/hooks/usePageSearch'
import PageModal from '@/components/page-modal'
import modalConfig from './config/modal'

// hook
const [pageContentRef, handleResetClick, handleSearchClick] = usePageSearch()

const pageModalRef = ref<InstanceType<typeof PageModal>>()

// 点击新建
const handleCreateClick = () => {
  if (pageModalRef.value) {
    pageModalRef.value.centerDialogVisible = true
  }
}
// 点击编辑
const handleEditClick = (item: any) => {
  if (pageModalRef.value) {
    pageModalRef.value.centerDialogVisible = true
  }
}
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
    <PageModal ref="pageModalRef" :modalConfig="modalConfig"></PageModal>
  </div>
</template>
