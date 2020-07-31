import {loaders} from './util/loaders'
import {patterns} from './util/patterns'

/**
 * SVG module rules
 * @return {object}
 */
const svg = bud => ({
  bud,
  output: {},
  test: patterns.svg,
  loaders: [loaders.svgr, loaders.url],

  /**
   * Make svg rules
   */
  make: function () {
    this.pre()
    this.output = {
      test: this.test,
      use: this.loaders,
    }

    this.post()

    return this.output
  },

  /**
   * Hook: pre_svg
   */
  pre: function () {
    this.bud.hooks.call('pre_svg', this)
  },

  /**
   * Hook: post_svg
   */
  post: function () {
    this.bud.hooks.call('post_svg', this.output)
  },
})

export {svg}