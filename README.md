
# qmc-libs 

- [qmc-libs](#qmc-libs)
  - [🚄 使用教程](#-使用教程)
    - [安装](#安装)
    - [使用](#使用)
    - [📖 文档](#-文档)
  - [Classes](#classes)
  - [TCPClient](#tcpclient)
    - [new TCPClient(options)](#new-tcpclientoptions)
    - [tcpClient.setCallback(handle)](#tcpclientsetcallbackhandle)
    - [tcpClient.send(data)](#tcpclientsenddata)
    - [tcpClient.open(options)](#tcpclientopenoptions)
  - [Transcoder](#transcoder)
    - [new Transcoder()](#new-transcoder)
    - [transcoder.encode(data, serialNumber)](#transcoderencodedata-serialnumber)
    - [transcoder.decode(buffer)](#transcoderdecodebuffer)
    - [transcoder.getPackageLength(buffer)](#transcodergetpackagelengthbuffer)
  - [WorkerECharts](#workerecharts)
    - [new WorkerECharts()](#new-workerecharts)
    - [workerECharts.registerTheme(name, theme) ⇒](#workerechartsregisterthemename-theme-)
    - [workerECharts.resizeAxisUnit(point) ⇒](#workerechartsresizeaxisunitpoint-)
    - [workerECharts.on(type, listener, isMust) ⇒ <code>Object</code>](#workerechartsontype-listener-ismust--object)
    - [workerECharts.off(indicator) ⇒](#workerechartsoffindicator-)
    - [workerECharts.init(div, theme)](#workerechartsinitdiv-theme)
    - [workerECharts.callMethod(methodName, ...args) ⇒](#workerechartscallmethodmethodname-args-)
    - [workerECharts.setOption(option, ...args) ⇒](#workerechartssetoptionoption-args-)
    - [workerECharts.getOption() ⇒](#workerechartsgetoption-)
    - [workerECharts.getAxisGrid() ⇒](#workerechartsgetaxisgrid-)
    - [workerECharts.getEchartXInterval() ⇒](#workerechartsgetechartxinterval-)
    - [workerECharts.getEchartYInterval() ⇒](#workerechartsgetechartyinterval-)
    - [workerECharts.enlargeZoom() ⇒](#workerechartsenlargezoom-)
    - [workerECharts.restoreZoom() ⇒](#workerechartsrestorezoom-)
    - [workerECharts.chartDataZoom() ⇒](#workerechartschartdatazoom-)
    - [workerECharts.dispatchAction(payload) ⇒](#workerechartsdispatchactionpayload-)
    - [workerECharts.resize(opts) ⇒](#workerechartsresizeopts-)
    - [workerECharts.clean() ⇒](#workerechartsclean-)
    - [workerECharts.dispose()](#workerechartsdispose)
    - [workerECharts.postMessage(message) ⇒](#workerechartspostmessagemessage-)
  - [WsWorkerClient](#wsworkerclient)
    - [new WsWorkerClient()](#new-wsworkerclient)
    - [wsWorkerClient.postMessage(message, transfer)](#wsworkerclientpostmessagemessage-transfer)
    - [wsWorkerClient.send(params, asyncCallback)](#wsworkerclientsendparams-asynccallback)
    - [wsWorkerClient.init(websocketUrl)](#wsworkerclientinitwebsocketurl)


## 🚄 使用教程

### 安装

```bash
  npm i install qmc-libs --save-dev or yarn add qmc-libs --save-dev
```

### 使用

```js
import { 
  TCPClient,
  Transcoder,
  WorkerWsClient,
  WorkerEcharts } from "qmc-libs"
or
import qmcLibs from "qmc-libs"
```

### 📖 文档

## Classes

<dl>
<dt><a href="#TCPClient">TCPClient</a></dt>
<dd></dd>
<dt><a href="#Transcoder">Transcoder</a></dt>
<dd></dd>
<dt><a href="#WorkerECharts">WorkerECharts</a></dt>
<dd></dd>
<dt><a href="#WsWorkerClient">WsWorkerClient</a></dt>
<dd></dd>
</dl>

<a name="TCPClient"></a>

## TCPClient
**Kind**: global class  

* [TCPClient](#TCPClient)
    * [new TCPClient(options)](#new_TCPClient_new)
    * [.setCallback(handle)](#TCPClient+setCallback)
    * [.send(data)](#TCPClient+send)
    * [.open(options)](#TCPClient+open)

<a name="new_TCPClient_new"></a>

### new TCPClient(options)
TCP客户端


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | ip - 服务器ip port -服务器端口 |

<a name="TCPClient+setCallback"></a>

### tcpClient.setCallback(handle)
设置回调函数

**Kind**: instance method of [<code>TCPClient</code>](#TCPClient)  

| Param | Type | Description |
| --- | --- | --- |
| handle | <code>function</code> | 设置回调函数 |

<a name="TCPClient+send"></a>

### tcpClient.send(data)
发送通信命令

**Kind**: instance method of [<code>TCPClient</code>](#TCPClient)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | 消息 |

<a name="TCPClient+open"></a>

### tcpClient.open(options)
开启client

**Kind**: instance method of [<code>TCPClient</code>](#TCPClient)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | ip - 服务器ip port -服务器端口 |

<a name="Transcoder"></a>

## Transcoder
**Kind**: global class  

* [Transcoder](#Transcoder)
    * [new Transcoder()](#new_Transcoder_new)
    * [.encode(data, serialNumber)](#Transcoder+encode)
    * [.decode(buffer)](#Transcoder+decode)
    * [.getPackageLength(buffer)](#Transcoder+getPackageLength)

<a name="new_Transcoder_new"></a>

### new Transcoder()
二进制编解码器

<a name="Transcoder+encode"></a>

### transcoder.encode(data, serialNumber)
编码

**Kind**: instance method of [<code>Transcoder</code>](#Transcoder)  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Buffer 对象数据 |
| serialNumber | <code>Int</code> | 包头标识 0xfafafafa |

<a name="Transcoder+decode"></a>

### transcoder.decode(buffer)
解码

**Kind**: instance method of [<code>Transcoder</code>](#Transcoder)  

| Param | Type |
| --- | --- |
| buffer | <code>Object</code> | 

<a name="Transcoder+getPackageLength"></a>

### transcoder.getPackageLength(buffer)
获取包长度两种情况：
1. 如果当前 buffer 去包头（包头为10个字节）后长度 小于 包头中包信息长度（包头中后2个字节），肯定不是一个完整的数据包，因此直接返回 0 不做处理（可能数据还未接收完等等）
2. 包头前4个字节为包头信息标识fafafafa
2. 否则返回这个完整的数据包的有效长度和无效位数

**Kind**: instance method of [<code>Transcoder</code>](#Transcoder)  

| Param | Type |
| --- | --- |
| buffer | <code>Buffer</code> | 

<a name="WorkerECharts"></a>

## WorkerECharts
**Kind**: global class  

<a name="new_WorkerECharts_new"></a>

### new WorkerECharts()
WorkerEcharts Class

<a name="WorkerECharts+registerTheme"></a>

### workerECharts.registerTheme(name, theme) ⇒
注册主题

**Kind**: instance method of [<code>WorkerECharts</code>](#WorkerECharts)  
**Returns**: Promise对象  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | light or dark |
| theme | <code>Object</code> | options |

<a name="WorkerECharts+resizeAxisUnit"></a>

### workerECharts.resizeAxisUnit(point) ⇒
重置x轴单位

**Kind**: instance method of [<code>WorkerECharts</code>](#WorkerECharts)  
**Returns**: Promise对象  

| Param | Type |
| --- | --- |
| point | <code>number</code> | 

<a name="WorkerECharts+on"></a>

### workerECharts.on(type, listener, isMust) ⇒ <code>Object</code>
绑定事件

**Kind**: instance method of [<code>WorkerECharts</code>](#WorkerECharts)  
**Returns**: <code>Object</code> - - {type,lisenter}对象  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>String</code> | 监听echart类型 |
| listener | <code>function</code> | 监听事件回调 |
| isMust | <code>Boolean</code> | 是否重置 |

<a name="WorkerECharts+off"></a>

### workerECharts.off(indicator) ⇒
解绑事件

**Kind**: instance method of [<code>WorkerECharts</code>](#WorkerECharts)  
**Returns**: null  

| Param | Type | Description |
| --- | --- | --- |
| indicator | <code>Object</code> | - { type:String,listener:function} |

<a name="WorkerECharts+init"></a>

### workerECharts.init(div, theme)
初始化

**Kind**: instance method of [<code>WorkerECharts</code>](#WorkerECharts)  

| Param | Type | Description |
| --- | --- | --- |
| div | <code>dom</code> \| <code>canvas</code> | dom对象或者canvas对象 |
| theme | <code>string</code> | echart 主题 |

<a name="WorkerECharts+callMethod"></a>

### workerECharts.callMethod(methodName, ...args) ⇒
调用echart方法

**Kind**: instance method of [<code>WorkerECharts</code>](#WorkerECharts)  
**Returns**: Promise对象  

| Param | Type | Description |
| --- | --- | --- |
| methodName | <code>string</code> | echart方法名 resize、dispatchAction |
| ...args | <code>object</code> | 配置参数options |

<a name="WorkerECharts+setOption"></a>

### workerECharts.setOption(option, ...args) ⇒
调用echart的setOption

**Kind**: instance method of [<code>WorkerECharts</code>](#WorkerECharts)  
**Returns**: Promise对象  

| Param | Type | Description |
| --- | --- | --- |
| option | <code>Object</code> | echart 配置参数options |
| ...args | <code>Object</code> | 其他配置 { notMerge?: boolean;replaceMerge?: string | string[];lazyUpdate?: boolean;} |

<a name="WorkerECharts+getOption"></a>

### workerECharts.getOption() ⇒
获取当前echart的options

**Kind**: instance method of [<code>WorkerECharts</code>](#WorkerECharts)  
**Returns**: Promise对象  
<a name="WorkerECharts+getAxisGrid"></a>

### workerECharts.getAxisGrid() ⇒
获取当前坐标数据开始点起始点

**Kind**: instance method of [<code>WorkerECharts</code>](#WorkerECharts)  
**Returns**: Promise对象  
<a name="WorkerECharts+getEchartXInterval"></a>

### workerECharts.getEchartXInterval() ⇒
获取当前横坐标数据

**Kind**: instance method of [<code>WorkerECharts</code>](#WorkerECharts)  
**Returns**: Promise对象  
<a name="WorkerECharts+getEchartYInterval"></a>

### workerECharts.getEchartYInterval() ⇒
获取当前纵坐标数据

**Kind**: instance method of [<code>WorkerECharts</code>](#WorkerECharts)  
**Returns**: Promise对象  
<a name="WorkerECharts+enlargeZoom"></a>

### workerECharts.enlargeZoom() ⇒
启动或关闭 toolbox 中 dataZoom 的刷选状态。

**Kind**: instance method of [<code>WorkerECharts</code>](#WorkerECharts)  
**Returns**: promise对象  
<a name="WorkerECharts+restoreZoom"></a>

### workerECharts.restoreZoom() ⇒
重置坐标轴

**Kind**: instance method of [<code>WorkerECharts</code>](#WorkerECharts)  
**Returns**: promise对象  
<a name="WorkerECharts+chartDataZoom"></a>

### workerECharts.chartDataZoom() ⇒
重置坐标轴 
params {Object}-  {type: String,dataZoomIndex: Number, start: Number,end: Number,startValue: Number,endValue: Number}

**Kind**: instance method of [<code>WorkerECharts</code>](#WorkerECharts)  
**Returns**: promise对象  
<a name="WorkerECharts+dispatchAction"></a>

### workerECharts.dispatchAction(payload) ⇒
调用echart 的dispatchAction

**Kind**: instance method of [<code>WorkerECharts</code>](#WorkerECharts)  
**Returns**: promise对象  

| Param | Type | Description |
| --- | --- | --- |
| payload | <code>Object</code> | 配置参数 |

<a name="WorkerECharts+resize"></a>

### workerECharts.resize(opts) ⇒
调用echart的resize方法

**Kind**: instance method of [<code>WorkerECharts</code>](#WorkerECharts)  
**Returns**: Promise对象  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>Object</code> | 配置参数 |

<a name="WorkerECharts+clean"></a>

### workerECharts.clean() ⇒
清除echart

**Kind**: instance method of [<code>WorkerECharts</code>](#WorkerECharts)  
**Returns**: Promise对象  
<a name="WorkerECharts+dispose"></a>

### workerECharts.dispose()
清除worker

**Kind**: instance method of [<code>WorkerECharts</code>](#WorkerECharts)  
<a name="WorkerECharts+postMessage"></a>

### workerECharts.postMessage(message) ⇒
将消息发送到工作线程;返回的承诺在onmessage消息返回时被解析

**Kind**: instance method of [<code>WorkerECharts</code>](#WorkerECharts)  
**Returns**: Promise对象  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>Object</code> | message对象 {type:String,args: Array<any>} |

<a name="WsWorkerClient"></a>

## WsWorkerClient
**Kind**: global class  

* [WsWorkerClient](#WsWorkerClient)
    * [new WsWorkerClient()](#new_WsWorkerClient_new)
    * [.postMessage(message, transfer)](#WsWorkerClient+postMessage)
    * [.send(params, asyncCallback)](#WsWorkerClient+send)
    * [.init(websocketUrl)](#WsWorkerClient+init)

<a name="new_WsWorkerClient_new"></a>

### new WsWorkerClient()
构建WSWorker实例

<a name="WsWorkerClient+postMessage"></a>

### wsWorkerClient.postMessage(message, transfer)
通过worker 发送消息

**Kind**: instance method of [<code>WsWorkerClient</code>](#WsWorkerClient)  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>Object</code> | {type:string,args:Array} |
| transfer | <code>\*</code> |  |

<a name="WsWorkerClient+send"></a>

### wsWorkerClient.send(params, asyncCallback)
**Kind**: instance method of [<code>WsWorkerClient</code>](#WsWorkerClient)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | 消息类型加参数数据 |
| asyncCallback | <code>Fucntion</code> | 存储回调方法 |

<a name="WsWorkerClient+init"></a>

### wsWorkerClient.init(websocketUrl)
初始化websocket

**Kind**: instance method of [<code>WsWorkerClient</code>](#WsWorkerClient)  

| Param | Type | Description |
| --- | --- | --- |
| websocketUrl | <code>String</code> | websocket地址 |

