"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * @Description: 节流函数
 * @param {Function} fn 延迟执行函数
 * @param {Number} wait 延迟时间间隔
 * @param {Boolean} immediate 第一次调用是否立即执行
 * @LastEditTime: 2020-01-09 16:09:29
 */
function throttle(fn, wait, immediate) {
  var lastTime = 0;
  return function () {
    var timestamp = Date.now();

    if (!lastTime && !immediate) {
      lastTime = timestamp;
    }

    if (timestamp - lastTime >= wait) {
      lastTime = timestamp;
      return fn.apply(this, arguments);
    }
  };
}

exports.default = throttle;