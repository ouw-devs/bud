import {MiniCssExtractPlugin} from './externals'
import {Plugin} from '@roots/bud-types'

const miniCssExtract: Plugin = bud => ({
  bud,

  options: {
    hmr: bud.features.enabled('hot'),
    filename: bud.features.enabled('hash')
      ? `${bud.options.get('filenameTemplate').hashed}.css`
      : `${bud.options.get('filenameTemplate').default}.css`,
  },

  make: function () {
    return new MiniCssExtractPlugin(this.options)
  },

  when: function () {
    return !this.bud.mode.is('development')
  },
})

export {miniCssExtract}