"use strict";
exports.__esModule = true;
exports.setProcess = void 0;
var setProcess = function (bud) {
    process.title = bud.hooks.filter('node_process_title', 'bud-cli');
    process.env.BABEL_ENV = bud.mode;
    process.env.NODE_ENV = bud.mode;
    var unhandledRejectionHandler = bud.hooks.filter('node_unhandled_rejection_handler', function (error) {
        process.exitCode = 1;
        process.nextTick(function () {
            bud.hooks.call('compile_error', { bud: bud, error: error });
            bud.util.terminate(bud);
        });
    });
    process.on('unhandledRejection', unhandledRejectionHandler);
};
exports.setProcess = setProcess;
//# sourceMappingURL=setProcess.js.map