<script setup lang="ts">
interface Hhh {
  name: string
  age: number
  sex: string
}

const message = 'hello vue'
const person: Hhh = {
  name: 'dwj',
  age: 22,
  sex: '男'
}
</script>

<template>
  <div>
    {{ message }}
    {{ person }}
  </div>
</template>
