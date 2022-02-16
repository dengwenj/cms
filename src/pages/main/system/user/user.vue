<script setup lang="ts">
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'
import searchFormConfig from './config/search'
import contentTableConfig from './config/content'
import modalConfig from './config/modal'
import usePageSearch from '@/hooks/usePageSearch'
import usePageModal from '@/hooks/usePageModal'

// hook
const [pageContentRef, handleResetClick, handleSearchClick] = usePageSearch()
const [pageModalRef, defaultInfo, handleCreateClick, handleEditClick] = usePageModal()
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
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
    />
  </div>
</template>
