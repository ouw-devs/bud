import type {Index, Bud} from '@roots/bud-typings'

export const template: Template = function (options?) {
  this.features.set('html', true)

  const plugin = this.extensions.get('html-webpack-plugin')

  options?.template && plugin.merge('template', options.template)
  options?.replacements &&
    plugin.merge('replacements', options.replacements)

  return this
}

export type Template<T = Bud.Contract> = (
  this: T,
  options?: {
    template: string
    replacements: Index<string>
  },
) => T
