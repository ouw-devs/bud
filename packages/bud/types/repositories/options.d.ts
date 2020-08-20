import type { BabelConfiguration, Copy, PostCssConfiguration } from './types';
declare const babel: (configs: any) => BabelConfiguration;
declare const browserSync: (flags: any) => any;
declare const postCss: (configs: any) => PostCssConfiguration;
/**
 * Options container.
 */
declare const options: {
    copy: Copy;
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': string;
            'Access-Control-Allow-Methods': string;
            'Access-Control-Allow-Headers': string;
        };
    };
    devtool: string;
    filenameTemplate: {
        hashed: string;
        default: string;
    };
    manifest: {
        name: string;
    };
    optimization: {
        runtimeChunk: {
            name: (entrypoint: any) => string;
        };
        splitChunks: {
            cacheGroup: {
                vendor: {
                    test: RegExp;
                    name: string;
                    chunks: string;
                    priority: number;
                };
            };
        };
    };
    patterns: any[];
    postCss: {};
    resolve: {
        alias: boolean;
        extensions: string[];
    };
    splitting: {
        maxChunks: any;
    };
    target: "web";
    terser: {
        terserOptions: {
            parse: {
                ecma: number;
            };
            compress: {
                ecma: number;
                warnings: boolean;
                comparisons: boolean;
                inline: number;
            };
            mangle: {
                safari10: boolean;
            };
            output: {
                ecma: number;
                comments: boolean;
                ascii_only: boolean;
            };
        };
        cache: boolean;
        parallel: boolean;
    };
    stats: {
        version: boolean;
        hash: boolean;
        assets: boolean;
        errors: boolean;
        warnings: boolean;
    };
    node: {
        module: string;
        dgram: string;
        dns: string;
        fs: string;
        http2: string;
        net: string;
        tls: string;
        child_process: string;
    };
};
export { options, babel, browserSync, postCss };
//# sourceMappingURL=options.d.ts.map