/*
 * @Author: your name
 * @Date: 2021-07-22 17:28:44
 * @LastEditTime: 2021-07-28 09:01:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Electron-Basic-Library\build\rollup.config.dev.js
 */
const path = require('path');
//const fs = require("fs")
import { babel } from '@rollup/plugin-babel'
//import serve from 'rollup-plugin-serve'
// import html from '@rollup/plugin-html'
// import livereload from 'rollup-plugin-livereload'
// import css from 'rollup-plugin-css-only';
import webWorker from "rollup-plugin-web-worker-loader"
import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs"
//import nodePlugins from "rollup-plugin-node-polyfills"
import { terser } from 'rollup-plugin-terser';
import json from "@rollup/plugin-json"

//import { rollup } from 'rollup';

// 返回文件的绝对路径
const resolveFile = function (filename) {
  return path.join(__dirname, filename);
}
let plugins = [
  json(),
  commonjs(),
  resolve(),
  //nodePlugins
  terser(),
  webWorker({
    targetPlatform: "browser" //转成浏览器支持
  }),

  babel(
    {
      babelrc: false,
      include: ['src/**/*'],
      exclude: 'node_modules/**',
      presets: [['@babel/preset-env', {
        "modules": false,
      }]],
      plugins: [["@babel/transform-runtime", { regenerator: true }]],
      babelHelpers: 'runtime',
      extensions: ['js', 'ts'],
    }
  )
];
const rollupConfig = {
  input: resolveFile("src/index.js"),
  output: {
    file: resolveFile(`dist/worker-ws-client.js`),
    format: 'umd',
    name: `worker-ws-client.js`,
  },
  plugins
}
module.exports = rollupConfig
