<script setup lang="ts">
import { useStore } from 'vuex'

const store = useStore()

</script>

<template>
  <div>
    {{ store.state.count }}
    <router-view />
  </div>
</template>
