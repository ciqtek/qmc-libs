/*
 * @Author: your name
 * @Date: 2021-07-26 10:43:13
 * @LastEditTime: 2021-07-26 17:55:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qmc-libs\types\types.d.ts
 */
declare module 'qmc-libs'


import { CiqTCPClient } from "./tcp-client"

import { CiqTranscoder } from "./transcoder"

import { CiqWorkerECharts } from "./worker-echarts"

import { CiqWorkerWsClient } from "./worker-ws-client"


export declare class TcpClient extends CiqTCPClient { }

export declare class Transcoder extends CiqTranscoder { }

export declare class WorkerECharts extends CiqWorkerECharts { }

export declare class WorkerWsClient extends CiqWorkerWsClient { }