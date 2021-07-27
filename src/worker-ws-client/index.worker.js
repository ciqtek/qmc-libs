/*
 * @Author: your name
 * @Date: 2021-07-26 09:32:59
 * @LastEditTime: 2021-07-26 09:58:48
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \qmc-libs\src\worker-ws-client\index.worker.js
 */

/**
 * websocket worker
 *
 * @class WsWorkerEventHandler
 */
class WsWorkerEventHandler {
  constructor () {
    this.socket = null
    // close来源判断及后续操作
    this.closeConfig = {
      resolve: null,
      closing: false
    }
    this.serverData = null
  }

  init (wsUrl) {
    if (this.socket) {
      throw new Error('Has been initialized')
    }
    console.log(wsUrl)
    const socket = (this.socket = new WebSocket(wsUrl))
    // 用于指定连接成功后的回调函数
    socket.onopen = (event) => {
      self.postMessage([{ key: 'wsConnectStatus', data: true }])
    }
    // 用于指定连接失败后的回调函数
    socket.onerror = (event) => {
      console.log('onerror', event)
    }
    // 用于指定连接关闭后的回调函数
    socket.onclose = (event) => {
      this.socket = null
      // 非主动close,websocket异常断开连接时
      if (!this.closeConfig.closing) {
        console.warn('websocket is Disconnect, Automatically connecting...')
        // 对应的重连操作
        this.init(wsUrl)
        return
      }
      console.warn('websocket is close')
      // 若手动close，恢复初始状态
      this.closeConfig.closing = false
    }
    // 用于指定当从服务器接受到信息时的回调函数
    socket.onmessage = (e) => {
      const res = JSON.parse(e.data || '')
      self.postMessage([res])
    }
  }

  /**
   *
   * 对要传输的数据进行排队
   * @param {String} name 名称，默认值，[]
   * @param {Object} [content={}]
   * @param {string} content.a
   */
  send (name, content = {}) {
    const status = this.socket && this.socket.readyState
    // 值为0，表示正在连接。
    // 值为1，表示连接成功，可以通信了。
    // 值为2，表示连接正在关闭。
    // 值为3，表示连接已经关闭，或者打开连接失败。
    if (status === 1) {
      const data = JSON.stringify(content)
      console.log('send:', data)
      this.socket.send(data)
    } else {
      throw new Error(`连接异常code: ${status}`)
    }
  }

  close () {
    this.closeConfig.closing = true
    this.socket.close()
    this.socket = null
  }
}
const events = new WsWorkerEventHandler()
self.onmessage = (msg) => {
  events[msg.data.type](...msg.data.args)
}
