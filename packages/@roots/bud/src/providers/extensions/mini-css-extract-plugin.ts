import type {Module} from '@roots/bud-typings'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const name = `mini-css-extract-plugin`

export const make: Module.Make = (options, bud) =>
  new MiniCssExtractPlugin({
    filename: bud.options.enabled('hash')
      ? '[name].[contenthash].css'
      : '[name].css',
    chunkFilename: bud.options.enabled('hash')
      ? '[id].[contenthash].css'
      : '[id].css',
    ...options.all(),
  })

export const options: Module.Options = {}

export const boot: Module.Boot = app => {
  app.build.set('items.minicss', {
    loader: MiniCssExtractPlugin.loader,
    options: {},
  })
}

export const when: Module.When = bud => bud.isProduction
