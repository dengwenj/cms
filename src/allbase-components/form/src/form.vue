<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import { ElRow, ElCol, ElForm, ElFormItem, ElInput, ElSelect, ElOption, ElDatePicker } from 'element-plus'

import { IFormItem } from '../types'

defineProps({
  formItem: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  },
})
</script>

<template>
  <div class="dwj-form">
    <el-row>
      <template v-for="item in formItem" :key="item.label">
        <el-col :span="8">
          <ElForm label-width="100px">
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
          </ElForm>
        </el-col>
      </template>
    </el-row>
  </div>
</template>
