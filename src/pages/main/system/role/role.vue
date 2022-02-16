<script lang="ts" setup>
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import PageModal from '@/components/page-modal'
import contentTableConfig from './config/content'
import searchFormConfig from './config/search'
import modalConfig from './config/modal'
import usePageModal from '@/hooks/usePageModal'

const [pageModalRef, defaultInfo, handleCreateClick, handleEditClick] = usePageModal()
</script>

<template>
  <div class="role">
    <PageSearch :searchFormConfig="searchFormConfig" />
    <PageContent
      :contentTableConfig="contentTableConfig"
      pageName="role"
      @handleCreateClick="handleCreateClick"
      @handleEditClick="handleEditClick"
      title="新建角色"
    />
    <PageModal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfig"
      pageName="role"
      title="新建角色"
    />
  </div>
</template>
