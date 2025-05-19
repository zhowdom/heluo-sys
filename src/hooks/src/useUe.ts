import {UeReportType, UeReportParams} from '@/types'
export function useUeConnect() {
  const ueConnect = async (type:UeReportType, payload?:any) => {
    try {
      switch(type) {
        case UeReportType.FLOAT_DIRECTION:
          console.log({
            param1: UeReportParams[UeReportType.FLOAT_DIRECTION],
            param2: payload?.opt
          })
          window.ue.web.js_call_ue(UeReportParams[UeReportType.FLOAT_DIRECTION], payload?.opt)
          break;
        case UeReportType.FLOAT_MENU_HOME:
          console.log({
            param1: UeReportParams[UeReportType.FLOAT_MENU_HOME],
            param2: payload?.opt
          })
          window.ue.web.js_call_ue(UeReportParams[UeReportType.FLOAT_MENU_HOME], payload?.opt)
          break;
        case UeReportType.WEATHER:
          console.log({
            param1: UeReportParams[UeReportType.WEATHER]
          })
          window.ue.web.js_call_ue(UeReportParams[UeReportType.WEATHER])
          break;
        case UeReportType.WARN_ITEM:
          console.log({
            param1: UeReportParams[UeReportType.WARN_ITEM],
            param2: payload?.opt
          })
          window.ue.web.js_call_ue(UeReportParams[UeReportType.WARN_ITEM], payload?.opt)
          break;
        case UeReportType.PROFESSION:
          console.log({
            param1: UeReportParams[UeReportType.PROFESSION],
            param2: payload?.opt
          })
          window.ue.web.js_call_ue(UeReportParams[UeReportType.PROFESSION], payload?.opt)
          break;
        case UeReportType.FLOOR:
          console.log({
            param1: UeReportParams[UeReportType.FLOOR],
            param2: payload?.opt
          })
          window.ue.web.js_call_ue(UeReportParams[UeReportType.FLOOR], payload?.opt)
          break;
        default:
          console.log('No matched to event type')
      }
    } catch (e) {
      console.log(e)
    }
  }
  return {
    ueConnect
  }
}
