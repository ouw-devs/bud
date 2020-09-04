import {Bud} from '..'
import type {WebpackRule} from '@roots/bud-typings'
import type {RepositoryDefinition} from '@roots/bud-typings'
import {RuleSetLoader} from 'webpack'

/**
 * Module Rule
 */
type Use = (bud: Bud) => WebpackRule

const uses: RepositoryDefinition = {
  name: 'uses',
  register: {
    babel: (bud: Bud): RuleSetLoader =>
      bud.hooks.filter('webpack.module.babel', {
        loader: bud.hooks.filter(
          'webpack.module.babel.loader',
          bud.loaders.get('babel'),
        ),
        options: bud.hooks.filter('webpack.module.babel.options', {
          cacheDirectory: bud.hooks.filter(
            'webpack.module.babel.options.cacheDirectory',
            true,
          ),
          cacheCompression: bud.hooks.filter(
            'webpack.module.babel.options.cacheCompression',
            true,
          ),
          ...bud.options.get('babel'),
        }),
      }),

    file: (bud: Bud): RuleSetLoader => ({
      loader: bud.loaders.get('file'),
      options: {
        name: '[path][name].[ext]',
      },
    }),

    miniCss: (bud: Bud): RuleSetLoader =>
      bud.hooks.filter('webpack.modules.miniCss', {
        loader: bud.hooks.filter(
          'webpack.modules.miniCss.loader',
          bud.loaders.get('miniCss'),
        ),
        options: bud.hooks.filter('webpack.modules.miniCss.options', {
          hot: bud.hooks.filter(
            'webpack.modules.miniCss.loader.hot',
            bud.features.enabled('hot'),
          ),
        }),
      }),

    css: (bud: Bud): RuleSetLoader =>
      bud.hooks.filter('webpack.modules.css', {
        loader: bud.hooks.filter(
          'webpack.modules.css.loader',
          bud.loaders.get('css'),
        ),
        options: {
          importLoaders: 1,
        },
      }),

    resolveUrl: (bud: Bud): RuleSetLoader =>
      bud.hooks.filter('webpack.modules.resolveurl', {
        loader: bud.hooks.filter(
          'webpack.modules.resolveurl.loader',
          bud.loaders.get('resolveUrl'),
        ),

        options: bud.hooks.filter(
          'webpack.module.resolveurl.options',
          {
            root: bud.paths.get('src'),
            sourceMap: bud.features.enabled('sourceMap'),
          },
        ),
      }),

    postCss: (bud: Bud): RuleSetLoader =>
      bud.hooks.filter('webpack.module.postcss', {
        loader: bud.hooks.filter(
          'webpack.module.postcss.loader',
          bud.loaders.get('postCss'),
        ),

        options: bud.hooks.filter('webpack.module.postcss.options', {
          plugins: [
            bud.options.get('postcss.plugins.autoprefixer')(),
          ],
        }),
      }),

    style: (bud: Bud): RuleSetLoader =>
      bud.hooks.filter('webpack.module.style', {
        loader: bud.hooks.filter(
          'webpack.module.style.loader',
          bud.loaders.get('style'),
        ),
      }),
  },
}

export {uses as default}
export {Use}