<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import { ElRow, ElCol, ElFormItem, ElInput } from 'element-plus'

import { IFormItem } from '../types'

defineProps({
  formItem: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  }
})
</script>

<template>
  <div class="dwj-form">
    <el-row>
      <template v-for="item in formItem" :key="item.label">
        <el-col :span="8">
          <el-form-item :label="item.label">
            <ElInput :placeholder="item.placeheader" />
          </el-form-item>
        </el-col>
      </template>
    </el-row>
  </div>
</template>
