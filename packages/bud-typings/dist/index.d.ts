/// <reference types="webpack-dev-server" />
interface Loose {
    [key: string]: any;
}
export { Loose };
import { TransformOptions as BabelTransformOptions } from '@babel/core';
export { BabelTransformOptions };
import type { Options as BrowserSyncOptions } from 'browser-sync';
export type { BrowserSyncOptions };
import type { Configuration as WebpackConfig, ConfigurationFactory as WebpackConfigFactory, RuleSetRule as WebpackRule } from 'webpack';
export declare type WebpackDevServer = WebpackConfig['devServer'];
export declare type WebpackEntry = WebpackConfig['entry'];
export declare type WebpackExternals = WebpackConfig['externals'];
export declare type WebpackMode = WebpackConfig['mode'];
export declare type WebpackModule = WebpackConfig['module'];
export declare type WebpackOptimization = WebpackConfig['optimization'];
export declare type WebpackOutput = WebpackConfig['output'];
export declare type WebpackPlugins = WebpackConfig['plugins'];
export declare type WebpackResolve = WebpackConfig['resolve'];
export declare type WebpackTarget = WebpackConfig['target'];
export type { WebpackConfig, WebpackConfigFactory, WebpackRule };
//# sourceMappingURL=index.d.ts.map