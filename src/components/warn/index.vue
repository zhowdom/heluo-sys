<script setup lang="ts">
import { createNamespace } from '@/utils'
const { bem } = createNamespace('heluo-sys-warn')
import {useLoadMoreWarn, useInfiniteScroll} from '@/hooks'
import WarnItem from '@/components/warnItem/index.vue'
import { storeToRefs } from 'pinia'
import {useWarnTypeStore} from '@/stores'
import {onMounted} from 'vue'
import Loding from '@/components/loading/index.vue'
defineProps({
  name: {
    type: String,
    default: ''
  }
})
const {loadMoreWarn, warnListArr, clickWraper, isloadingRequest} = useLoadMoreWarn()
const warnTypeStore = useWarnTypeStore()
const {warnTypeArr, currenntChoosedWarnCode} = storeToRefs(warnTypeStore)
const { containerRef, isLoadedAllData } = useInfiniteScroll(loadMoreWarn);
onMounted(() => {
  clickWraper(currenntChoosedWarnCode.value, true)
})
</script>

<template>
   <div :class="[bem()]">
    <div :class="bem('type-box')">
      <ul>
        <li v-for="(item, idx) in warnTypeArr" :key="idx" @click="clickWraper(item.typeCode, true)">{{item.typeName}}</li>
      </ul>
    </div>

    <div :class="bem('show-list')" ref="containerRef">
      <div :class="bem('show-item')" v-for="(item, index) in warnListArr" :key="index">
        <WarnItem :warnInfos="item" />
      </div>
      <div class="flex-center" style="margin-top:200px;">
        <Loding v-if="isloadingRequest" />
        <div v-if="isLoadedAllData && !isloadingRequest" :class="bem('finished')">已加载完全部数据</div>
        <div v-if="warnListArr?.length === 0 && !isloadingRequest" :class="bem('empty')">暂无数据～</div>
      </div>
      
    </div>

   </div>
</template>

<style scoped lang="less">
.heluo-sys-warn{
  height:860px;
  width:550px;
  background: linear-gradient( 180deg, #12171E 0%, #0E1A2A 100%);
  border-radius: 0px 0px 0px 0px;
  position: absolute;
  top:50px;
  right:20px;
  padding: 12px;
  z-index: 999;
  &__type-box{
    ul{
      display: flex;
      gap: 2px;
      justify-content: space-between;
      li{
        height: 36px;
        width:72px;
        color: #fff;
        line-height:36px;
        text-align:center;
        background: linear-gradient( 180deg, rgba(50,141,129,0.8) 26%, rgba(18,24,30,0) 100%);
        font-size: 14px;
        cursor:pointer;
        &.cur{
          background: linear-gradient( 180deg, #FFC85D 0%, rgba(254,201,98,0.3) 100%);
          font-weight: bold;
        }
      }
    }
  }
  &__show-list{
    overflow-y: scroll;
    margin-top: 12px;
    height: 810px;
  }
  &__finished,
  &__empty{
    font-size: 26px;
    color: red;
    font-weight: bold;
  }
}
</style>
