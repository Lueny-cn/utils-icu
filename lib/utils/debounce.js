"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * @Description: 防抖函数
 * @param {Function} fn 延迟执行函数
 * @param {Number} wait 延迟时间间隔
 * @param {Boolean} immediate 第一次调用是否立即执行
 * @LastEditTime: 2020-01-09 16:08:41
 */
function debounce(fn, wait, immediate) {
  var timer = void 0;
  return function () {
    var context = this;
    var args = arguments;

    if (!timer && immediate) {
      timer = -1;
      return fn.apply(context, args);
    }

    if (timer) clearTimeout(timer);

    timer = setTimeout(function () {
      fn.apply(context, args);
    }, wait);
  };
}

exports.default = debounce;