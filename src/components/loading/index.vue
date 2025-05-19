<script setup lang="ts">
import { createNamespace } from '@/utils'
const { bem } = createNamespace('heluo-sys-loading')
</script>

<template>
   <div :class="bem()">
    <div class="face front"></div>
    <div class="face back"></div>
    <div class="face left"></div>
    <div class="face right"></div>
    <div class="face top"></div>
    <div class="face bottom"></div>
    </div>

</template>

<style scoped lang="less">
.heluo-sys-loading{
  width: 40px;
  height: 40px;
  position: relative;
  transform-style: preserve-3d;
  animation: rotate 3s infinite linear;
  .face {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  border: 2px solid #fff;
  background: linear-gradient(45deg, #ff3d77, #338aff);
}

.front { transform: translateZ(20px); }
.back { transform: rotateY(180deg) translateZ(20px); }
.right { transform: rotateY(90deg) translateZ(20px); }
.left { transform: rotateY(-90deg) translateZ(20px); }
.top { transform: rotateX(90deg) translateZ(20px); }
.bottom { transform: rotateX(-90deg) translateZ(20px); }
}
@keyframes rotate {
  from { transform: rotateX(0) rotateY(0); }
  to { transform: rotateX(360deg) rotateY(360deg); }
}
</style>
