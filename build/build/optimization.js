"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.optimization = void 0;
var uglifyjs_webpack_plugin_1 = __importDefault(require("uglifyjs-webpack-plugin"));
/**
 * Webpack optimization
 * @type {function} optimization
 */
var optimization = function (bud) { return ({
    bud: bud,
    supports: {
        minification: bud.state.features.minified,
        runtimeChunk: bud.state.features.inlineManifest,
        vendor: bud.state.features.vendor
    },
    options: {
        optimization: {
            minimize: bud.state.features.minified,
            removeAvailableModules: false,
            removeEmptyChunks: false,
            moduleIds: 'hashed'
        }
    },
    splitChunksOptions: {
        cacheGroups: {
            vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: bud.state.options.vendor.name,
                chunks: 'all',
                priority: -20
            }
        }
    },
    runtimeChunkOptions: {
        name: function (entrypoint) { return "runtime/" + entrypoint.name; }
    },
    uglifyOptions: bud.state.options.uglify,
    make: function () {
        this.whenSupported('runtimeChunk', this.setRuntimeChunk);
        this.whenSupported('vendor', this.setSplitChunks);
        this.whenSupported('minimize', this.setMinimizer);
    },
    whenSupported: function (feature, callback) {
        this.currentCallback = callback;
        this.supports[feature] && this.currentCallback();
    },
    setRuntimeChunk: function () {
        this.doHook('pre_runtimechunk');
        this.options.optimization.runtimeChunk = this.runtimeChunkOptions;
        this.doHook('post_runtimechunk');
    },
    setSplitChunks: function () {
        this.doHook('pre_splitchunks');
        this.options.optimization.splitChunks = this.splitChunksOptions;
        this.doHook('post_splitchunks');
    },
    setMinimizer: function () {
        this.doHook('pre_minimizer', this);
        this.options.optimization.minimizer = [
            this.uglify(),
        ];
        this.doHook('post_minimizer', this);
    },
    uglify: function () {
        this.doHook('pre_uglify', this);
        var uglify = new uglifyjs_webpack_plugin_1["default"](this.uglifyOptions);
        this.doHook('post_uglify', this);
        return uglify;
    },
    doHook: function (name) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        this.bud.hooks.call("webpack_optimization_" + name, this, params);
    }
}); };
exports.optimization = optimization;
//# sourceMappingURL=optimization.js.map