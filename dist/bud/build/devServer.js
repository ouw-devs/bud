"use strict";
exports.__esModule = true;
exports.devServer = void 0;
/**
 * Dev server
 * @param {Bud} bud
 */
var devServer = function (bud) { return ({
    bud: bud,
    options: {
        devServer: bud.options.get('dev')
    },
    make: function () {
        return this.bud.hooks.filter('filter_dev_final', this.options);
    }
}); };
exports.devServer = devServer;
//# sourceMappingURL=devServer.js.map