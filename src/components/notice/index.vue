<script setup lang="ts">
import { createNamespace } from '@/utils'
const { bem } = createNamespace('heluo-sys-notice')
import {useWarnTypeStore, useWarnDialogStore} from '@/stores'
const {getWarnType, allWarnCount}  = useWarnTypeStore()
const {controlVisible}  = useWarnDialogStore()
getWarnType()
</script>

<template>
   <div :class="[bem(), 'flex-center']" @click="controlVisible()">
    <img src="@/assets/usedimg/notice@3x.png" />
    <i>{{allWarnCount >= 99 ? '99+' : allWarnCount}}</i>
   </div>
</template>

<style scoped lang="less">
.heluo-sys-notice{
   position: fixed;
   top:0;
   right:130px;
   background: #282E32;
   height: 35px;
   width: 35px;
   border-radius: 100%;
   cursor: pointer;
  img{
   width: 22px;
   height: 22px;
  }
  i{
   background: #DA4343;
   display: inline-block;
   color: #fff;
   font-size: 12px;
   padding: 1px 3px;
   border-radius: 7px;
   font-style: normal;
   position: absolute;
   top:-5px;
   right:-20px;
  }
}
</style>
