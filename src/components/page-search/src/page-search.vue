<script lang="ts" setup>
import { ref, defineProps, PropType } from 'vue'
import { ElButton } from 'element-plus'
import { Search, Refresh } from '@element-plus/icons-vue'

import DWJForm from '@/allbase-components/form'

import type { IForm } from '@/allbase-components/form/types'

const props = defineProps({
  searchFormConfig: {
    type: Object as PropType<IForm>,
    required: true
  }
})

// 双向绑定的属性应该是由配置文件的 field 来决定
const { formItem } = props.searchFormConfig
const formObj: Record<string, string> = {}
formItem.forEach((item) => {
  formObj[item.fieid] = ''
})
const formData = ref(formObj)

// 点击重置
const handleResetClick = () => {
  for (const key in formObj) {
    formData.value[key] = formObj[key]
  }
}
</script>

<template>
  <div class="page-search">
    <DWJForm v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2 style="text-align: center; color: #599df8">高级组件</h2>
      </template>
      <template #footer>
        <div class="footer">
          <ElButton :icon="Refresh" @click="handleResetClick">重置</ElButton>
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
