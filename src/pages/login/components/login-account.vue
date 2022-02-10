<script lang="ts" setup>
import { reactive } from 'vue'
import { ElForm, ElFormItem, ElInput } from 'element-plus'

import { rules } from '../config'

const account = reactive({
  name: '',
  password: ''
})
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
