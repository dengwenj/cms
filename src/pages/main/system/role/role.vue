<script lang="ts" setup>
import { computed, nextTick, ref } from 'vue'
import { ElTree } from 'element-plus'

import { useStore } from '@/store'
import { menuMapLeafkeys } from '@/utils/map-menus'
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import PageModal from '@/components/page-modal'
import contentTableConfig from './config/content'
import searchFormConfig from './config/search'
import modalConfig from './config/modal'
import usePageModal from '@/hooks/usePageModal'


const elTreeRef = ref<InstanceType<typeof ElTree>>()
const editCallback = (item: any) => {
  const leafKeys = menuMapLeafkeys(item.menuList)
  nextTick(() => {
    elTreeRef.value?.setCheckedKeys(leafKeys, false)
  })
}

// hook
const [pageModalRef, defaultInfo, handleCreateClick, handleEditClick] = usePageModal(undefined, editCallback)

const otherInfo = ref({})
const store = useStore()
const menus = computed(() => store.state.entirMenu)

const handleCheckChange = (data1: any, data2: any) => {
  const { checkedKeys, halfCheckedKeys } = data2
  otherInfo.value = { menuList: [...checkedKeys, ...halfCheckedKeys] }
}
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
      :otherInfo="otherInfo"
    >
      <ElTree
        ref="elTreeRef"
        :data="menus"
        :props="{ children: 'children', label: 'name' }"
        nodeKey="id"
        showCheckbox
        style="margin-left: 30px;"
        @check="handleCheckChange"
      />
    </PageModal>
  </div>
</template>
