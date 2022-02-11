<script lang="ts" setup>
import { reactive, defineExpose, ref } from 'vue'
import { ElForm, ElFormItem, ElInput } from 'element-plus'

import { rules } from '../config'
import localCache from '@/utils/cache'

const account = reactive({
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? ''
})

// 获取 ElForm 组件的实例对象
const formRef = ref<InstanceType<typeof ElForm>>()

// 父组件点击登录会执行这个函数
const loginAction = (isKeepPassword: boolean) => {
  formRef.value?.validate((v) => {
    // 当 v 为 true 说明校验通过的
    if (v) {
      // 判断是否点击了记住密码
      if (isKeepPassword) {
        // 本地缓存，存在本地
        localCache.setCache('name', account.name)
        localCache.setCache('password', account.password)
      } else {
        localCache.removeCache('name')
        localCache.removeCache('password')
      }
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
        <ElInput v-model="account.password" show-password />
      </ElFormItem>
    </ElForm>
  </div>
</template>
