<script lang="ts" setup>
import { ref, defineProps, PropType } from 'vue'
import { ElButton } from 'element-plus'
import { Search, Refresh } from '@element-plus/icons-vue'

import DWJForm from '@/allbase-components/form'

import type { IForm } from '@/allbase-components/form/types'

defineProps({
  searchFormConfig: {
    type: Object as PropType<IForm>,
    required: true
  }
})

const formData = ref({
  name: '',
  id: '',
  dz: '',
  createTime: ''
})
</script>

<template>
  <div class="page-search">
    <DWJForm v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2>user</h2>
      </template>
      <template #footer>
        <div class="footer">
          <ElButton :icon="Refresh">重置</ElButton>
          <ElButton :icon="Search" type='primary'>搜索</ElButton>
        </div>
      </template>
    </DWJForm>
  </div>
</template>

<style lang="less" scoped>
.footer {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
