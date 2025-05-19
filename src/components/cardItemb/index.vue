<script setup lang="ts">
import { createNamespace } from '@/utils'
import { ICardCommonInfos } from '@/types'
const { bem } = createNamespace('heluo-sys-card-item-b')
import { PropType } from 'vue'
defineProps({
  cardInfos: {
    type: Object as PropType<ICardCommonInfos>,
  }
})
</script>

<template>
   <div :class="[bem(), 'flex-wrap', 'flex-center']">
    <div :class="[bem('mini'), 'flex-between']">
      <div :class="bem('l')">
        <img src="@assets/usedimg/taishi-1@3x(1).png">
      </div>
      <div :class="bem('r')">
        <p>接入设备数</p>
        <p>{{cardInfos.exceptionCount}}</p>
      </div>
    </div>

    <div :class="[bem('mini'), 'flex-between']">
      <div :class="bem('l')">
        <img src="@assets/usedimg/taishi-1@3x(1).png">
      </div>
      <div :class="bem('r')">
        <p>运行设备数</p>
        <p>{{cardInfos.runingCount}}</p>
      </div>
    </div>

    <div :class="[bem('mini'), 'flex-between']">
      <div :class="bem('l')">
        <img src="@assets/usedimg/taishi-1@3x(1).png">
      </div>
      <div :class="bem('r')">
        <p>故障设备数</p>
        <p>{{cardInfos.offlineCount}}</p>
      </div>
    </div>

    <div :class="[bem('mini'), 'flex-between']">
      <div :class="bem('l')">
        <img src="@assets/usedimg/taishi-1@3x(1).png">
      </div>
      <div :class="bem('r')">
        <p>警告设备数</p>
        <p>{{cardInfos.failureCount}}</p>
      </div>
    </div>

   </div>
</template>

<style scoped lang="less">
.heluo-sys-card-item-b{
  margin-top:20px;
  &__mini{
    width:160px;
    height:70px;
    margin-bottom:10px;
  }
  &__l{
    img{
      width:60px;
      height:66px;
    }
  }
}
</style>
