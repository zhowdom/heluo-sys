<script setup lang="ts">
import { createNamespace } from '@/utils'
const { bem } = createNamespace('heluo-sys-login')
import { useLogin } from '@/hooks'

const { loginstr, doLogin } = useLogin()
</script>

<template>
   <div :class="[bem(), 'flex-center', 'set-center']">
    <a @click="doLogin">登陆 + {{loginstr}}</a>
   </div>
</template>

<style scoped lang="less">
.heluo-sys-login{
  height: 400px;
  width: 500px;
  background: rgba(255,255,255,.5);
  border-radius: 10px;
  a{
    color: #fff;
    background: drak;
  }
}
</style>
