<script lang="ts" setup>
import { ref, defineEmits } from 'vue'
import { ElIcon } from 'element-plus'
import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue'

const isFold = ref(false)

const emit = defineEmits(['foldChange'])
const handlerClick = () => {
  isFold.value = !isFold.value
  // 传给父组件
  emit('foldChange', isFold.value)
}
</script>

<template>
  <div class="nav-header">
    <ElIcon style="cursor: pointer;" size="22px" @click="handlerClick">
      <template v-if="isFold"><DArrowRight /></template>
      <template v-else><DArrowLeft /></template>
    </ElIcon>
  </div>
</template>
