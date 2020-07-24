/**
 * Webpack output.
 */
const output = bud => ({
  bud,

  options: {
    output: {
      path: bud.state.paths.dist,
      publicPath: bud.state.paths.public,
      filename: bud.state.features.hash
        ? '[name].[hash:8].js'
        : '[name].js',
    },
  },

  make: function () {
    return this.options
  },
})

export {output}
