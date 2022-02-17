<script setup lang="ts">
import { ref, defineProps, defineExpose, watch } from 'vue'
import { ElDialog, ElButton } from 'element-plus'
import { useStore } from '@/store'

import DWJForm from '@/allbase-components/form'

const props = defineProps({
  modalConfig: {
    type: Object,
    required: true
  },
  defaultInfo: {
    type: Object,
    default: () => ({})
  },
  otherInfo: {
    type: Object,
    default: () => ({})
  },
  pageName: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: ''
  }
})

const centerDialogVisible = ref(false)
const formData = ref<Record<string, any>>({})

// 监听 是不是点击的编辑，是的话 props.defaultInfo 就变了
watch(() => props.defaultInfo, (newValue) => {
  for (const item of  props.modalConfig.formItem) {
    formData.value[item['fieid']] = newValue[item['fieid']]
  }
})

const store = useStore()
// 点击确定
const handleClick = () => {
  centerDialogVisible.value = false
  if (Object.keys(props.defaultInfo).length > 0) {
    // 编辑
    store.dispatch('system/editPageDataAction', {
      pageName: props.pageName,
      editData: { ...formData.value, ...props.otherInfo },
      id: props.defaultInfo.id
    })
    return
  }
  // 新建
  store.dispatch('system/createPageDataAction', {
    pageName: props.pageName,
    createData: { ...formData.value, ...props.otherInfo }
  })
}

defineExpose({
  centerDialogVisible
})
</script>

<template>
  <div class="page-modal">
    <ElDialog v-model="centerDialogVisible" :title="title" width="30%" center destroy-on-close>
      <DWJForm v-bind="modalConfig" v-model="formData" />
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <ElButton @click="centerDialogVisible = false">取消</ElButton>
          <ElButton type="primary" @click="handleClick">确定</ElButton>
        </span>
      </template>
  </ElDialog>
  </div>
</template>
