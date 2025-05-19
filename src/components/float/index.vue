<script setup lang="ts">
import { createNamespace } from '@/utils'
const { bem } = createNamespace('heluo-sys-float-menu')
</script>

<template>
   <div :class="[bem(), 'flex-center']">
    <img src="@assets/usedimg/east@3x.png" />
    <img src="@assets/usedimg/south@3x.png" />
    <img src="@assets/usedimg/home@3x.png" />
    <img src="@assets/usedimg/west@3x.png" />
    <img src="@assets/usedimg/north@3x.png" />
   </div>
</template>

<style scoped lang="less">
.heluo-sys-float-menu{
  width: 448px;
  height: 62px;
  position: fixed;
  bottom: 26px;
  margin-left: -224px;
  left: 50%;
  background: linear-gradient( 180deg, rgba(69,94,90,0.61) 0%, rgba(12,12,20,0.2) 100%);
  box-shadow: 0px 6px 14px 0px rgba(0,42,72,0.4);
  border-radius: 8px 8px 8px 8px;
  img{
    height: 40px;
    width: 40px;
  }
}
</style>
