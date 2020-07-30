"use strict";
exports.__esModule = true;
exports.framework = void 0;
var api_1 = require("./api");
var hooks_1 = require("./hooks");
var util_1 = require("./util");
var state_1 = require("./state");
var compiler_1 = require("./compiler");
/**
 * Bud - asset management framework.
 *
 * @const {Bud} bud
 */
var framework = function () {
    this.configs = state_1.state.configs;
    this.hooks = hooks_1.hooks().init(this);
    this.util = util_1.util;
    this.state = state_1.state;
    this.plugins = state_1.state.plugins;
    this.options = state_1.state.options;
    this.features = state_1.state.features;
    this.mode = state_1.state.flags.get('mode');
    this.inDevelopment = state_1.state.flags.is('mode', 'development');
    this.inProduction = state_1.state.flags.is('mode', 'production');
    this.compiler = compiler_1.compiler;
    this.alias = api_1.api.alias;
    this.auto = api_1.api.auto;
    this.babel = api_1.api.babel;
    this.bundle = api_1.api.bundle;
    this.compile = api_1.api.compile;
    this.copy = api_1.api.copy;
    this.copyAll = api_1.api.copyAll;
    this.dashboard = api_1.api.dashboard;
    this.devtool = api_1.api.devtool;
    this.dist = api_1.api.dist;
    this.distPath = api_1.api.distPath;
    this.debug = api_1.api.debug;
    this.dependencyManifest = api_1.api.dependencyManifest;
    this.dev = api_1.api.dev;
    this.dump = api_1.api.dump;
    this.glob = api_1.api.glob;
    this.hash = api_1.api.hash;
    this.hot = api_1.api.hot;
    this.inlineManifest = api_1.api.inlineManifest;
    this.map = api_1.api.map;
    this.mini = api_1.api.mini;
    this.postCss = api_1.api.postCss;
    this.preset = api_1.api.preset;
    this.project = api_1.api.project;
    this.projectPath = api_1.api.projectPath;
    this.publicPath = api_1.api.publicPath;
    this.purge = api_1.api.purge;
    this.resolve = api_1.api.resolve;
    this.scss = api_1.api.scss;
    this.splitting = api_1.api.splitting;
    this.src = api_1.api.src;
    this.srcPath = api_1.api.srcPath;
    this.stylelint = api_1.api.stylelint;
    this.sync = api_1.api.sync;
    this.target = api_1.api.target;
    this.terser = api_1.api.terser;
    this.translate = api_1.api.translate;
    this.vendor = api_1.api.vendor;
    this.watch = api_1.api.watch;
};
exports.framework = framework;
//# sourceMappingURL=index.js.map