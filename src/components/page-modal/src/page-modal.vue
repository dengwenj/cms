<script setup lang="ts">
import { ref, defineProps, defineExpose, watch } from 'vue'
import { ElDialog, ElButton } from 'element-plus'

import DWJForm from '@/allbase-components/form'

const props = defineProps({
  modalConfig: {
    type: Object,
    required: true
  },
  defaultInfo: {
    type: Object,
    default: () => ({})
  }
})

const centerDialogVisible = ref(false)
const formData = ref<Record<string, any>>({})

// 监听 是不是点击的编辑，是的话 props.defaultInfo 就变了
watch(() => props.defaultInfo, (newValue) => {
  for (const item in  newValue) {
    formData.value[item] = newValue[item]
  }
})

defineExpose({
  centerDialogVisible
})
</script>

<template>
  <div class="page-modal">
    <ElDialog v-model="centerDialogVisible" title="新建用户" width="30%" center destroy-on-close>
      <DWJForm v-bind="modalConfig" v-model="formData" />
      <template #footer>
        <span class="dialog-footer">
          <ElButton @click="centerDialogVisible = false">取消</ElButton>
          <ElButton type="primary" @click="centerDialogVisible = false">确定</ElButton>
        </span>
      </template>
  </ElDialog>
  </div>
</template>
