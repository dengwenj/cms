<script setup lang="ts">
import { ref, defineProps, withDefaults, onMounted } from 'vue'
import * as echart from 'echarts'

import type { EChartsOption } from 'echarts'

const props = withDefaults(defineProps<{
  options: any
  width?: string
  height?: string
}>(), {
  width: '100%',
  height: '360px'
})

const echartRef = ref<HTMLElement>()
onMounted(() => {
  const echartInstance = echart.init(echartRef.value!)
  echartInstance.setOption(props.options)
})

// const emit = defineEmits<{
//   (e: 'change', id: number): void
//   (e: 'update', value: string): void
// }>()
// emit('change', 1)
</script>

<template>
  <div class="base-echart">
    <div ref="echartRef" class="echart" :style="{ width, height }"></div>
  </div>
</template>
