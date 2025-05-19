<script setup lang="ts">
import { createNamespace } from '@/utils'
const { bem } = createNamespace('heluo-sys-profession')
import {useProfession} from '@/hooks'
import cardtitle from '@/components/cardtitle/index.vue'
import {UeReportType, IProfession} from '@/types'
import {useUeConnect} from '@/hooks'
const {ueConnect} = useUeConnect()
const {professionList, alterProfessionList} = useProfession()
const clickWrap = (item:IProfession, idx:number) => {
  alterProfessionList(idx)
  ueConnect(UeReportType.PROFESSION, {
    opt: JSON.stringify({
      major: item.major,
      state: !item.state
    })
  })
}
</script>

<template>
   <div :class="[bem()]">
    <cardtitle name="专业" />
    <ul>
      <li v-for="(item, idx) in professionList" :key="idx" class="flex-between" @click="clickWrap(item, idx)">
        <span>{{item.major}}</span>
        <span>{{item.state}}</span>
      </li>
    </ul>
   </div>
</template>

<style scoped lang="less">
.heluo-sys-profession{
  width: 170px;
  background: linear-gradient( 333deg, #00C2CE 0%, rgba(0,194,206,0) 100%), rgba(12,12,20,0.7);
  border-radius: 4px 4px 4px 4px;
  margin-right: 16px;
  ul{
    padding: 10px;
    height:380px;
    display: flex; 
    flex-direction: column;
    li{
      flex: 1; 
      display: flex; 
      align-items: center;
      cursor: pointer;
      &:hover{
        font-weight: bold;
      }
    }
  }
}
</style>
