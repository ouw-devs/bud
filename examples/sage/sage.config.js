// @ts-check
const {sage} = require('@roots/sage')

/**
 * This is specific for the Bud monorepo only.
 *
 * You do not need to include this hook in your project
 * configuration file.
 */
sage.hooks.on('webpack.resolve.modules', modules => {
  return [...modules, sage.project('./../../node_modules')]
})

sage.entry('app', ['styles/app.scss', 'scripts/app.js']).run()
