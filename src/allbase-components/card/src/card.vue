<script lang="ts" setup>
import { ElCard } from 'element-plus'
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="card">
    <ElCard class="box-card">
      <template #header>
        <div class="card-header">
          <span>{{ title }}</span>
        </div>
      </template>
      <slot></slot>
    </ElCard>
  </div>
</template>
