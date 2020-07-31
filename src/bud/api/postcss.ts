import type {Bud, PostCss} from './types'

const postCss: PostCss = function ({enabled, ...options}): Bud {
  const postCssEnabled = enabled ? enabled : true
  postCssEnabled && this.features.enable('postCss')

  if (this.features.enabled('postCss')) {
    this.options.set('postcss', {
      ...this.options.get('postCss'),
      ...options,
    })
  }

  return this
}

export {postCss}