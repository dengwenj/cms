<script lang="ts" setup>
import { reactive } from 'vue'
import { ElForm, ElFormItem, ElInput } from 'element-plus'

const account = reactive({
  name: '',
  password: ''
})

const rules = {
  name: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须5~10个字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '用户名必须3个以上字母或数字',
      trigger: 'blur'
    }
  ]
}
</script>

<template >
  <div class="login-account">
    <ElForm label-width="80px" :rules="rules" :model="account">
      <ElFormItem label="用户名" prop="name">
        <ElInput v-model="account.name" />
      </ElFormItem>
      <ElFormItem label="密码" prop="password">
        <ElInput v-model="account.password" type='password' />
      </ElFormItem>
    </ElForm>
  </div>
</template>
