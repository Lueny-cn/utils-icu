'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _debonce = require('./utils/debonce');

var _debonce2 = _interopRequireDefault(_debonce);

var _throttle = require('./utils/throttle');

var _throttle2 = _interopRequireDefault(_throttle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  debonce: _debonce2.default, // 防抖
  throttle: _throttle2.default // 节流
};