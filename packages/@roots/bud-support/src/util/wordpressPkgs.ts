import {join} from 'lodash'

export type Pkgs =
  | `@wordpress/${string}`
  | 'lodash'
  | 'react'
  | 'react-dom'
  | 'jquery'

export type Transform = 'window' | 'enqueue'

export type TransformFn = (pkg: Pkgs) => string

export interface Transforms {
  window: TransformFn
  enqueue: TransformFn
}

/**
 * Camelize @wordpress pkg names
 */
const camelize = (pkg: string): string =>
  pkg.replace(/-(.)/g, (_m: string, g: string): string =>
    g.toUpperCase(),
  )

/**
 * Transform @wordpress pkg names
 */
const transformPkgName = pkg =>
  pkg.replace(/^@wordpress\/(.*)$/, (_m, g) => g)

/**
 * Is pkg string a wordpress window var match
 */
export const isProvided: (pkg: string) => boolean = pkg =>
  pkg.startsWith('@wordpress/') ||
  ['jquery', 'react', 'react-dom', 'lodash'].includes(pkg)

/**
 * Transform pkg string request
 */
export const transform = (pkg: Pkgs) => {
  switch (pkg) {
    case 'jquery':
      return {
        window: join(['jQuery'], '.'),
        enqueue: 'jquery',
      }
    case 'lodash':
      return {
        window: join(['lodash'], '.'),
        enqueue: 'lodash',
      }
    case 'react':
      return {
        window: join(['React'], '.'),
        enqueue: 'react',
      }
    case 'react-dom':
      return {
        window: join(['ReactDOM'], '.'),
        enqueue: 'react-dom',
      }
    default:
      return {
        window: ['wp', camelize(transformPkgName(pkg))],
        enqueue: join(['wp', transformPkgName(pkg)], '-'),
      }
  }
}
