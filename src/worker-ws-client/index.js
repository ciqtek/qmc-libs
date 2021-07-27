

import WsWorker from 'web-worker:./index.worker'
class WsWorkerClient {
  /**
   * 构建WSWorker实例
   */
  constructor () {
    this._worker = new WsWorker()
    this._promise = {}
  }
  /**
   * 通过worker 发送消息
   * @param {Object} message - {type:string,args:Array}
   * @param {*} transfer 
   */
  postMessage (message, transfer) {
    this._worker.postMessage(message, transfer)
  }
  /**
   * 
   * @param {Object} params - 消息类型加参数数据
   * @param {Fucntion} asyncCallback -存储回调方法
   */
  send (params, asyncCallback) {
    this._promise[params.key] ? this._promise[params.key].push(asyncCallback) : this._promise[params.key] = [asyncCallback]
    this.postMessage({
      type: 'send',
      args: [params.key, params]
    })
  }
  /**
   * 初始化websocket
   * @param {String} websocketUrl - websocket地址
   */
  init (websocketUrl) {
    this.postMessage({
      type: 'init',
      args: [websocketUrl]
    })
  }
}

export default WsWorkerClient
