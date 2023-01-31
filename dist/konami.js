"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var kc = function kc(c) {
  var seq = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  var q = seq.slice(0);
  document.addEventListener('keyup', function (e) {
    if (q[0] === e.keyCode) {
      q.shift();
      if (!q.length) {
        c();
        q = seq.slice(0);
      }
    } else {
      q = seq.slice(0);
    }
  });
};
var _default = kc;
exports.default = _default;