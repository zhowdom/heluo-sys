<script setup lang="ts">
// import logoUrl from '@/assets/usedimg/mask@2x.png'
import card from '@/components/card/index.vue'
import floor from '@/components/floor/index.vue'
import { createNamespace } from '@/utils'
const { bem } = createNamespace('heluo-sys-home-wrap')

</script>

<template>
  <div :class="[bem(), 'flex-between']">
    <!-- <img :src="logoUrl" alt="logo"> -->
    <!-- <img src="@/assets/usedimg/mask@2x.png" alt="logo"> -->

    <div :class="bem('l')">
      <card name="airconditional" position="left"></card>
      <card name="newwind" position="left"></card>
      <card name="ventilate" position="left"></card>
    </div>
    <div :class="bem('r')">
      <floor top="100px" left="-100px" />
      <card name="devicesituation" position="right"></card>
      <card name="exhaust" position="right"></card>
      <card name="remainwind" position="right"></card>
    </div>
  </div>
</template>

<style scoped lang="less">
.heluo-sys-home-wrap{
  width: 100%;
  &__r{
    position: relative;
  }
}
</style>
