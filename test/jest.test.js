/*
 * @Author: your name
 * @Date: 2021-07-26 09:40:28
 * @LastEditTime: 2021-07-26 10:41:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qmc-libs\test\jest.test.js
 */
import {
  TCPClient,
  Transcoder,
  WorkerWsClient,
  WorkerEcharts,
} from "../dist/index.js"

if (typeof window.URL.createObjectURL === 'undefined') {
  Object.defineProperty(window.URL, 'createObjectURL', { value: function () { } })
}
describe('qmc-libs', () => {
  test('TCPClient', () => {
    let options = {
      ip: "localhost", port: "8080"
    }
    console.log(new TCPClient(options))
  })
  test('Transcoder', () => {
    console.log(new Transcoder())
  })
  test('WorkerWsClient', () => {
    console.log(new WorkerWsClient())
  })
  test('WorkerEcharts', () => {
    console.log(new WorkerEcharts())
  })
})