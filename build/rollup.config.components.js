/*
 * @Author: your name
 * @Date: 2021-07-22 17:28:44
 * @LastEditTime: 2021-07-26 20:03:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Electron-Basic-Library\build\rollup.config.components.js
 */

const path = require('path');
const fs = require("fs")
import { babel } from '@rollup/plugin-babel'
//import serve from 'rollup-plugin-serve'
// import html from '@rollup/plugin-html'
// import livereload from 'rollup-plugin-livereload'
// import css from 'rollup-plugin-css-only';
import webWorker from "rollup-plugin-web-worker-loader"
import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs"
import { terser } from 'rollup-plugin-terser';
import json from "@rollup/plugin-json"



//import { rollup } from 'rollup';

// 返回文件的绝对路径
const resolveFile = function (filename) {
  return path.join(__dirname, '..', filename);
}

let plugins = [
  json(),
  commonjs(),
  terser(),
  webWorker({
    targetPlatform: "browser" //转成浏览器支持
  }),
  resolve({
    customResolveOptions: {
      moduleDirectory: 'node_modules',
    },
  }),
  babel(
    {
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [['@babel/preset-env', {
        "modules": false,
      }]]
    }
  )
];
let commponents = fs.readdirSync(resolveFile('./src')).filter(item => item.indexOf("index.js") === -1)
const rollupConfig = commponents.map(key => {
  return {
    input: resolveFile(`src/${key}/index.js`),
    output: {
      file: resolveFile(`dist/${key}/index.js`),
      format: 'umd',
      name: `${key}.js`,
    },
    plugins
  }
})
module.exports = rollupConfig
