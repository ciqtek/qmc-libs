
import { TranscoderInterface } from "./transcoder"
declare interface Options {
  ip?: string
  port?: string | number
}

/**
 *  TCP实例
 */
export declare class CiqTCPClient {
  //tcp 实例
  client: Object
  //连接状态
  isConnected: Boolean
  // 是否关闭App
  isClose: Boolean
  // bus callback
  busHandle: void
  //Transcoder 对象
  transcoder: TranscoderInterface
  //缓冲区
  overageBuffer: Buffer
  // 设置callback
  setCallback(handle: void): void
  // 发送数据
  send(data: string): void
  // 初始化 tcpClinent
  open(options: Options): void
}