<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { ElDialog, ElButton } from 'element-plus'

import DWJForm from '@/allbase-components/form'

const props = defineProps({
  modalConfig: {
    type: Object,
    required: true
  }
})

const centerDialogVisible = ref(true)
const formData = ref({})
</script>

<template>
  <div class="page-modal">
    <ElDialog v-model="centerDialogVisible" title="新建用户" width="30%" center>
      <DWJForm v-bind="modalConfig" v-model="formData">

      </DWJForm>
      <template #footer>
        <span class="dialog-footer">
          <ElButton @click="centerDialogVisible = false">取消</ElButton>
          <ElButton type="primary" @click="centerDialogVisible = false">确定</ElButton>
        </span>
      </template>
  </ElDialog>
  </div>
</template>
