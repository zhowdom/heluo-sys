export enum CardTypeEnum {
  /**
   * 智能空调
   */
  airconditional = 'SAC',
  /**
   * 新风系统
   */
  newwind = 'CombinedAir',
  /**
   * 通风系统
   */
  ventilate = 'VTS',
  /**
   * 排风系统
   */
  exhaust = 'EAF',
  /**
   * 实验室余风监测
   */
  remainwind = 'VOC',
}

 export enum CardTypeNames {
  /**
   * 智能空调
   */
  airconditional = '智能空调',
  /**
   * 新风系统
   */
  newwind = '新风系统',
  /**
   * 通风系统
   */
  ventilate = '通风系统',
  /**
   * 排风系统
   */
  exhaust = '排风系统',
  /**
   * 实验室余风监测
   */
  remainwind = '实验室余风监测',
  /**
   * 设备态势
   */
  devicesituation = '设备态势'
}

export interface ICardCommonInfos {
  // 通用卡片的信息展示字段
  // 总数
  all?: number
  // 报警
  fault?: number
  // 运行
  running?: number
  // 停止
  stopped?: number

  // 设备态势的信息展示字段
  // 接入设备
  exceptionCount?: number
  // 运行设备
  runingCount?: number
  // 故障设备
  offlineCount?: number
  // 警告设备
  failureCount?: number
}

export interface IFloor {
  fullParentId: string
  parentId: string
  spaceCode: string
  spaceId: string
  spaceName: string
  spaceType: string
}

// 报警分类
export interface IWarnType {
  count: number
  percent: number
  typeCode: string
  typeName: string
}
// 具体报警信息
export interface IWarnInfos {
  // 报警主要描述
  alarmDesc: string
  // 报警时间
  alarmTime: string
  // 报警设备
  deviceIdName: string
  // 报警点位
  processTypeName: string
  // 报警状态
  processStatusName: string
  // 所属系统
  deviceIdSystemIdName: string
  // 所属位置
  spaceIdName: string
  // 设备编码
  spaceIdNumber: string
}

export interface IWeatherData {
  air: string;
  air_level: string;
  air_pm25: string;
  air_tips: string;
  city: string;
  date: string;
  humidity: string;
  tem: number;
  update_time: string;
  wea: string;
  wea_img: string;
  week: string;
}

export interface IDeviceType {
  typeCode: string;
  typeCount: number;
  typeId: string;
  typeName: string;
}

export interface InfiniteScrollOptions {
  /**
   * 距离底部多少像素触发加载
   * @default 50
   */
  threshold?: number;
  
  /**
   * 是否立即检查是否需要加载
   * @default false
   */
  immediate?: boolean;
}