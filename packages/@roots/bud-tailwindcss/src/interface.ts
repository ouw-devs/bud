import '@roots/bud'
import '@roots/bud-postcss'

declare module '@roots/bud-framework' {
  interface Framework {
    /**
     * ## bud.tailwindcss
     *
     * Configure tailwindcss.
     *
     * ### Usage
     *
     * ```js
     * bud.tailwindcss({
     *   theme: {
     *     // etc
     *   }
     * })
     */
    tailwind: Framework.Tailwind.Configure
  }

  namespace Framework.Tailwind {
    export type Configure = (
      params: Omit<Tailwind.Config, null>,
    ) => Framework

    export interface Config {
      purge?: string[]
      target?: string
      prefix?: string
      important?: boolean
      separator?: string
      presets?: string[]
      theme?: {
        [key: string]: UserDef
      }
      variants?: {
        [key: string]: Variant[]
      }
      corePlugins?: {}
      plugins?: []
    }

    export type UserDef<
      T = UserDef<{[key: string]: UserDef<string>}>
    > = T | Rule<T> | RuleSet<T> | ThemeFn<T>

    export interface RuleSet<T> {
      [key: string]: UserDef<Rule<T>>
    }

    export type Rule<T> =
      | string
      | string[]
      | boolean
      | ThemeFn<T>
      | RuleSet<T>
      | T

    export type ThemeFn<T = {[key: string]: UserDef<string>}> = (
      key: string,
      selection: string,
    ) => UserDef<T>

    export type Variant = 'responsive' | 'hover' | 'focus'
  }
}
