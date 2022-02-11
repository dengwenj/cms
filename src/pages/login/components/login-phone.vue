<script lang="ts" setup>
import { ref, reactive, defineExpose } from 'vue'
import { useStore } from 'vuex'
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus'

import { phoneRules } from '../config';

const phone = reactive({
  phone: '',
  code: ''
})
const store = useStore()
const formRef = ref<InstanceType<typeof ElForm>>()

// 点击手机登录会执行这个函数
const phoneLoginAction = () => {
  formRef.value?.validate((v) => {
    if (v) {
      // 执行逻辑
      store.dispatch('login/phoneLoginAction', { ...phone })
    }
  })
}
defineExpose({
  phoneLoginAction
})
</script>

<template>
  <div class="login-phone">
    <ElForm label-width="80px" :rules="phoneRules" :model="phone" ref="formRef">
      <ElFormItem label="手机号" prop="phone">
        <ElInput v-model="phone.phone" />
      </ElFormItem>
      <ElFormItem label="验证码" prop="code">
        <div class="code">
          <ElInput v-model="phone.code" style="margin-right: 5px;" />
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
