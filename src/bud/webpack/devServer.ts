import type {Bud} from './types'

/**
 * Dev server
 * @param {Bud} bud
 */
const devServer = (bud: Bud) => ({
  bud,

  target: {
    devServer: bud.options.get('dev'),
  },

  make: function () {
    this.target = this.bud.hooks.filter('webpack_devServer', this.target)
    this.bud.logger.info(
      {name: 'webpack.devServer', value: this.target},
      `webpack.devServer has been generated`,
    )
    return this.target
  },
})

export {devServer}
