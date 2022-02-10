<script lang="ts" setup>
import { reactive, defineExpose, ref } from 'vue'
import { ElForm, ElFormItem, ElInput } from 'element-plus'

import { rules } from '../config'

const account = reactive({
  name: '',
  password: ''
})

// 获取 ElForm 组件的实例对象
const formRef = ref<InstanceType<typeof ElForm>>()

// 父组件点击登录会执行这个函数
const loginAction = () => {
  formRef.value?.validate((v) => {
    // 当 v 为 true 说明校验通过的
    if (v) {
      console.log('执行逻辑')
    }
  })
}
// 参数里面写的父组件就拿的到了
defineExpose({
  loginAction
})
</script>

<template >
  <div class="login-account">
    <ElForm label-width="80px" :rules="rules" :model="account" ref="formRef">
      <ElFormItem label="用户名" prop="name">
        <ElInput v-model="account.name" />
      </ElFormItem>
      <ElFormItem label="密码" prop="password">
        <ElInput v-model="account.password" type='password' />
      </ElFormItem>
    </ElForm>
  </div>
</template>
