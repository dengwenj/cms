<script lang="ts" setup>
import { reactive } from 'vue'
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus'

import { phoneRules } from '../config';

const phone = reactive({
  phone: '',
  code: ''
})

</script>

<template>
  <div class="login-phone">
    <ElForm label-width="80px" :rules="phoneRules" :model="phone">
      <ElFormItem label="手机号" prop="phone">
        <ElInput v-model="phone.phone" />
      </ElFormItem>
      <ElFormItem label="验证码" prop="code">
        <div class="code">
          <ElInput v-model="phone.code" type='password' style="margin-right: 5px;" />
          <ElButton type='primary'>获取验证码</ElButton>
        </div>
      </ElFormItem>
    </ElForm>
  </div>
</template>

<style scoped lang="less">
.code {
  display: flex;
}
</style>
