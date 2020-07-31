"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.copy = void 0;
var path_1 = require("path");
var copy = function (from, to) {
    this.options.set('copy', {
        patterns: __spreadArrays(this.options.get('copy').patterns, [
            {
                from: from,
                to: to ? to : path_1.join(this.paths.get('dist'), from)
            },
        ])
    });
    return this;
};
exports.copy = copy;
//# sourceMappingURL=copy.js.map