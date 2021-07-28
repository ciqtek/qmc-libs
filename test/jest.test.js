/*
 * @Author: your name
 * @Date: 2021-07-26 09:40:28
 * @LastEditTime: 2021-07-28 09:27:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qmc-libs\test\jest.test.js
 */

import WorkerWsClient from "../dist/worker-ws-client.js"

if (typeof window.URL.createObjectURL === 'undefined') {
  Object.defineProperty(window.URL, 'createObjectURL', { value: function () { } })
}
describe('WorkerWsClient', () => {
  test('WorkerWsClient', () => {
    console.log(new WorkerWsClient())
  })
})