<script setup lang="ts">
import Float from '@/components/float/index.vue'
import Upheader from '@/components/upheader/index.vue'
import {useWarnDialogStore} from '@/stores'
import { defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia'
const Warn = defineAsyncComponent(() => import('@/components/warn/index.vue'))
import { createNamespace } from '@/utils'
const { bem } = createNamespace('heluo-sys-app-wrap')
const warnDialogStore = useWarnDialogStore()
const {warnDialogVisible} = storeToRefs(warnDialogStore)
</script>

<template>
  <div :class="[bem(), 'flex-center', 'height100']">
    <Float />
    <Upheader />
    <router-view />    
    <component v-if="warnDialogVisible" :is="Warn" />
  </div>
</template>
<style scoped>
</style>
