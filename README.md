


# worker-ws-client


## 🚄 使用教程

### 安装

```bash
  npm i install worker-ws-client --save-dev or yarn add worker-ws-client --save-dev
```

### 使用

```js
import WorkerWsClient from "worker-ws-client"


class WsClient extends WorkerWsClient {
  constructor(){
    super()
    this._worker.addEventListener('message', e => {
      
    })
  }
}

```

### 📖 文档

<a name="WsWorkerClient"></a>

## WsWorkerClient 

- [worker-ws-client](#worker-ws-client)
  - [🚄 使用教程](#-使用教程)
    - [安装](#安装)
    - [使用](#使用)
    - [📖 文档](#-文档)
  - [WsWorkerClient](#wsworkerclient)
    - [new WsWorkerClient()](#new-wsworkerclient)
    - [wsWorkerClient.postMessage(message, transfer)](#wsworkerclientpostmessagemessage-transfer)
    - [wsWorkerClient.send(params, asyncCallback)](#wsworkerclientsendparams-asynccallback)
    - [wsWorkerClient.init(websocketUrl)](#wsworkerclientinitwebsocketurl)

<a name="new_WsWorkerClient_new"></a>

### new WsWorkerClient()
构建WsWorkerClient实例

<a name="WsWorkerClient+postMessage"></a>

### wsWorkerClient.postMessage(message, transfer)
通过worker 发送消息

| Param | Type | Description |
| --- | --- | --- |
| message | <code>Object</code> | {type:string,args:Array} |
| transfer | <code>\*</code> |  |

<a name="WsWorkerClient+send"></a>

### wsWorkerClient.send(params, asyncCallback)

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | 消息类型加参数数据 |
| asyncCallback | <code>Fucntion</code> | 存储回调方法 |

<a name="WsWorkerClient+init"></a>

### wsWorkerClient.init(websocketUrl)
初始化websocket

| Param | Type | Description |
| --- | --- | --- |
| websocketUrl | <code>String</code> | websocket地址 |

