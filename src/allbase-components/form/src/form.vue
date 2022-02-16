<script lang="ts" setup>
import { defineProps, defineEmits, watch, PropType, ref, watchEffect } from 'vue'
import { ElRow, ElCol, ElForm, ElFormItem, ElInput, ElSelect, ElOption, ElDatePicker } from 'element-plus'

import { IFormItem } from '../types'

const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
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
const emit = defineEmits(['update:modelValue'])

// 不能直接修改 props ，单向数据流，在创建个状态，把 props 里面的数据放进来，也不要用引用
const formData = ref({ ...props.modelValue })

watch(formData, (newValue) => {
  emit('update:modelValue', newValue)
}, {
  deep: true
})
</script>

<template>
  <div class="dwj-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <ElForm :label-width="labelWidth" :style="itemStyle">
      <el-row>
        <template v-for="item in formItem" :key="item.label">
          <el-col v-bind="colLayout">
              <template v-if="item.type === 'input' || item.type === 'password' ">
                <el-form-item v-if="!item.isHidden" :label="item.label">
                  <ElInput
                    :placeholder="item.placeheader"
                    :show-password="item.type === 'password'"
                    v-model="formData[item.fieid]"
                  />
                </el-form-item>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-form-item :label="item.label">
                  <ElSelect style="width: 100%;" :placeholder="item.placeheader" v-model="formData[item.fieid]">
                    <ElOption v-for="item1 in item.options" :key="item1.value" :value="item1.value" :label="item1.title">
                      {{ item1.title }}
                    </ElOption>
                  </ElSelect>
                </el-form-item>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-form-item :label="item.label">
                  <ElDatePicker v-bind="item.otherOptions" v-model="formData[item.fieid]">
                  </ElDatePicker>
                </el-form-item>
              </template>
          </el-col>
        </template>
      </el-row>
    </ElForm>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.dwj-form {
  padding-top: 22px;
}
</style>
