


export declare class CiqWorkerWsClient {
  //worker 实例
  _worker?: Worker

  //存储promise队列
  _promise?: Object

  //init websocket
  init(websocketUrl: string): void

  /**
   *  send message
   * @param params  type message
   * @param asyncCallback  callback
   */
  send(params: Object, asyncCallback: void): void

  /**
   * _worker.postMessage
   * @param message 
   *  
   */
  postMessage(message: Object): void

}