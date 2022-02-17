<script setup lang="ts">
import { useStore } from '@/store'

const store = useStore()

store.dispatch('dashboard/getCategoryGoods')
</script>

<template>
  <div class="dashboard">
  </div>
</template>
