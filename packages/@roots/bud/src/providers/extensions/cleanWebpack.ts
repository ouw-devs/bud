import {
  Options,
  CleanWebpackPlugin as Plugin,
} from 'clean-webpack-plugin'
import {Module} from '@roots/bud-typings'

export const name = `clean-webpack-plugin`

export const make: Module.Make<Plugin, Options> = options =>
  new Plugin(options.all())

export const options: Module.Options<Options> = () => ({
  cleanOnceBeforeBuildPatterns: ['**/*', '!dll'],
})
