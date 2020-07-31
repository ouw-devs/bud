"use strict";
exports.__esModule = true;
exports.output = void 0;
/**
 * Webpack output
 *
 * @param {Bud} bud
 * @return {OutputBuilder}
 */
var output = function (bud) { return ({
    bud: bud,
    options: {
        output: {
            path: bud.paths.get('dist'),
            publicPath: bud.paths.get('public'),
            filename: bud.features.enabled('hash')
                ? '[name].[hash:8].js'
                : '[name].js'
        }
    },
    make: function () {
        this.options.output.filename = this.bud.hooks.filter('filter_output_filename', this.options.output.filename);
        return this.bud.hooks.filter('filter_output_final', this.options);
    }
}); };
exports.output = output;
//# sourceMappingURL=output.js.map