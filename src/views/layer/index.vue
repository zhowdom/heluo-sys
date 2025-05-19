<script setup lang="ts">
import device from '@/components/device/index.vue'
import floor from '@/components/floor/index.vue'
import profession from '@/components/profession/index.vue'
import { createNamespace } from '@/utils'
import {ref} from 'vue'
const { bem } = createNamespace('heluo-sys-layer')
const refFloor = ref<HTMLElement>(null!)
</script>

<template>
  <div :class="[bem(), 'flex-between']">
    <floor top="270px" left="0px" path="layer" ref="refFloor" />
    <device :floorToDeviceList="refFloor?.floorToDeviceList" />
    <profession />
  </div>
</template>

<style scoped>
.heluo-sys-layer {
  height:100%;
  width:100%;
  position:relative;
}
</style>
