<script setup lang="ts">
import { createNamespace } from '@/utils'
const { bem } = createNamespace('heluo-sys-seat')
import {useSeat} from '@/hooks'
</script>

<template>
   <div :class="[bem()]">
    <img :class="bem('icon')" :src="useSeat('airconditional')" />
    <img :class="bem('seat')" src="@assets/usedimg/seat/base-di@3x.png" />
   </div>
</template>

<style scoped lang="less">
.heluo-sys-seat{
  width:120px;
  height:110px;
  position:relative;
  margin-top:60px;
  &__icon{
    height:32px;
    width:32px;
    position:absolute;
    top:30px;
    left:38px;
  }
  &__seat{
    height:110px;
    width:120px;
    position:absolute;
    bottom:-20px;
    left:0;
  }
}
</style>
