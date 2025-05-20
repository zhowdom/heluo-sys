<script setup lang="ts">
// import logoUrl from '@/assets/usedimg/mask@2x.png'
import card from '@/components/card/index.vue'
import floor from '@/components/floor/index.vue'
import { createNamespace } from '@/utils'
import {useGlobalVisibleControllerStore} from '@/stores'
import {storeToRefs} from 'pinia'
const globalVisibleControllerStore = useGlobalVisibleControllerStore()
const {globalVisiblePool} = storeToRefs(globalVisibleControllerStore)
const { bem } = createNamespace('heluo-sys-home-wrap')
setTimeout(() => {
  globalVisibleControllerStore.SwitchFoldOnlyTwoSide(false)
}, 3000)
</script>

<template>
  <div :class="[bem(), 'flex-between']" v-show="globalVisiblePool.home_two_pannel.state">
    <!-- <img :src="logoUrl" alt="logo"> -->
    <!-- <img src="@/assets/usedimg/mask@2x.png" alt="logo"> -->
    <div :class="bem('l')">
      <card name="airconditional" position="left"></card>
      <card name="newwind" position="left"></card>
      <card name="ventilate" position="left"></card>
    </div>
    <floor :class="bem('mrgl-auto')" />
    <div :class="bem('r')">
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
  &__mrgl-auto{
    margin-left: auto;
  }
}
</style>
