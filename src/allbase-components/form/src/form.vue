<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import { ElRow, ElCol, ElForm, ElFormItem, ElInput, ElSelect, ElOption, ElDatePicker } from 'element-plus'

import { IFormItem } from '../types'

defineProps({
  formItem: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: '100px'
  },
  itemStyle: {
    type: Object,
    default: () => ({ padding: '10px 40px' })
  },
  colLayout: {
    type: Object,
    default: () => ({
      xs: 24,
      sm: 24,
      md: 12,
      lg: 8,
      xl: 6
    })
  }
})
</script>

<template>
  <div class="dwj-form">
    <ElForm :label-width="labelWidth" :style="itemStyle">
      <el-row>
        <template v-for="item in formItem" :key="item.label">
          <el-col v-bind="colLayout">
              <template v-if="item.type === 'input' || item.type === 'password' ">
                <el-form-item :label="item.label">
                  <ElInput :placeholder="item.placeheader" :show-password="item.type === 'password'" />
                </el-form-item>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-form-item :label="item.label">
                  <ElSelect style="width: 100%;" :placeholder="item.placeheader">
                    <ElOption v-for="item1 in item.options" :key="item1.title" :value="item1.value" :label="item1.title">
                      {{ item1.value }}
                    </ElOption>
                  </ElSelect>
                </el-form-item>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-form-item :label="item.label">
                  <ElDatePicker v-bind="item.otherOptions" type="daterange">
                  </ElDatePicker>
                </el-form-item>
              </template>
          </el-col>
        </template>
      </el-row>
    </ElForm>
  </div>
</template>

<style lang="less" scoped>
.dwj-form {
  padding-top: 22px;
}
</style>
