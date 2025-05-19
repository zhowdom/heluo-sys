import { defineStore } from "pinia";
import {ref} from 'vue'

export const useWarnDialogStore = defineStore("warnDialog", () => {
  const warnDialogVisible = ref(false)

  const controlVisible = (state?:any) => {
    console.log(state, 'kkkk')
    if (state === '' || state === undefined) {
      warnDialogVisible.value = !warnDialogVisible.value
    } else {
      warnDialogVisible.value = state
    }
  }
  return {
    warnDialogVisible,
    controlVisible
  }
}
)
