import bud, {BudInterface} from '@roots/bud'
import sageFeatures, {SelectFeatures} from './sageFeatures'

/**
 * Sage
 */
export interface Sage extends BudInterface {
  support(this: Sage, features: SelectFeatures): Sage
}

const sage: Sage = bud
  .srcPath('resources/assets')
  .distPath('dist')
  .alias({
    '@fonts': bud.src('fonts'),
    '@images': bud.src('images'),
    '@scripts': bud.src('scripts'),
    '@styles': bud.src('styles'),
  })
  .provide({
    jquery: ['$', 'window.jQuery'],
  })
  .map()
  .hash()
  .vendor()
  .when(
    bud.mode.is('production'),
    () => bud.mini().runtimeManifest(),
    () => null,
  )

sage.apply('sageFeatures', sageFeatures)

export {sage as default}