/**
 * bud public api
 *
 * imported by project bud.config.js to be configured
 * the end result is exported from bud.config.js for use in the main build process
 */

const path = require('path')
const api = require('./api')

/**
 * Env settings
 */
const inProduction = true
const inDevelopment = false

/**
 * Produce an absolute path from a project relative path
 *
 * @param  {string} relPath
 * @return {string}
 */
const resolve = relPath => relPath
  ? path.join(bud.options.project, relPath)
  : bud.options.project

/**
 * Define webpack aliases.
 *
 * @param  {object} alias
 * @return {object} bud
 */
const alias = alias => {
  bud.options.alias = alias

  return bud
}

/**
 * Development mode
 *
 * @param  {object} options
 * @return {object} bud
 */
const dev = options => {
  bud.options.dev = {
    ...bud.options.dev,
    ...options,
  }

  return bud
}

/**
 * Redefine path to compiled assets
 *
 * @param  {string} path
 * @return {object} bud
 */
const dist = path => {
  bud.options.dist = path

  return bud
}

/**
 * Redefine project context
 *
 * @param  {string} path
 * @return {object} bud
 */
const project = path => {
  bud.options.project = path

  return bud
}

/**
 * Watch mode timeout
 *
 * @param  {number} timeout in ms
 * @return {object} bud
 */
const watchTimeout = timeout => {
  bud.options.dev.watchOptions.aggregateTimeout = timeout

  return bud
}

/**
 * Babel options
 *
 * @param  {object} options
 * @return {object} bud
 */
const babel = options => {
  bud.options.babel = api.babel(options)

  return bud
}

/**
 * Entrypoints
 *
 * @param  {string} chunk
 * @param  {array}  entries
 * @return {object} bud
 */
const entry = (chunk, entries) => {
  bud.options.entry = {
    ...bud.options.entry,
    [`${chunk}`]: entries,
  }

  return bud
}

/**
 * PostCSS options
 *
 * @prop   {bool}   enabled
 * @return {object} bud
 */
const postcss = ({enabled = bud.options.postcss}) => {
  bud.options.postcss = api.postcss({
    budpack: bud.options.budpack,
    project: bud.options.project,
    enabled: enabled,
  })

  return bud
}

/**
 * Eslint options
 *
 * @prop   {bool}   enabled
 * @return {object} bud
 */
const eslint = ({enabled = bud.options.eslint}) => {
  bud.options.eslint = api.eslint({
    budpack: bud.options.budpack,
    project: bud.options.project,
    enabled: enabled,
  })

  return bud
}

/**
 * Configure @wordpress/dependency-extraction-webpack-plugin
 *
 * @param  {object} settings
 * @return {object} bud
 */
const wpManifest = settings => {
  bud.options.wpManifest = {
    ...bud.options.wpManifest,
    ...settings,
  }

  return bud
}

/**
 * Enable or dispable hashing
 *
 * @param  {bool}   state
 * @return {object} bud
 */
const hash = state => {
  bud.options.hashed = state

  return bud
}

/**
 * Enable or dispable source-maps
 *
 * @param  {bool}   state
 * @return {object} bud
 */
const maps = state => {
  bud.options.mapped = state

  return bud
}

/**
 * Enable or dispable minification
 *
 * @param  {bool}   state
 * @return {object} bud
 */
const mini = state => {
  bud.options.minified = state

  return bud
}

/**
 * Enable or dispable hot module reloading
 *
 * @param  {bool}   state
 * @return {object} bud
 */
const hot = state => {
  bud.options.hot = state
  return bud
}

/**
 * Enable or dispable watch mode
 *
 * @param  {bool}   state
 * @return {object} bud
 */
const watch = state => {
  bud.options.watching = state
  return bud
}

/**
 * Default paths
 */
const paths = {
  budpack: path.resolve(__dirname, './../..'),
  project: process.cwd(),
  dist: 'dist',
}

/**
 * Default options
 */
const options = {
  ...paths,
  dev: {
    host: 'localhost',
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    disableHostCheck: true,
    hot,
    watchOptions: {
      aggregateTimeout: 300,
    },
  },
  entry: {},
  eslint: api.eslint({
    ...paths,
    enabled: true,
  }),
  postcss: api.postcss({
    ...paths,
    enabled: true,
  }),
  wpManifest: {
    useDefaults: true,
    injectPolyfill: false,
    outputFormat: 'json',
  },
  inProduction,
  inDevelopment,
  watching: inDevelopment,
  hot: inDevelopment,
  mapped: inProduction,
  hashed: inProduction,
  minified: inProduction,
}

/**
 * The exported configuration tool.
 */
const bud = {
  /**
   * A container for the options
   */
  options,

  /**
   * Statuses
   */
  inProduction,
  inDevelopment,

  /**
   * Public methods
   */
  alias,
  babel,
  dev,
  dist,
  entry,
  eslint,
  hash,
  hot,
  maps,
  mini,
  postcss,
  project,
  resolve,
  watch,
  watchTimeout,
  wpManifest,
}

module.exports = bud
