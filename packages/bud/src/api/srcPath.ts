import {join} from 'path'
import type {Bud, PathSetter} from './types'

const srcPath: PathSetter = function (dir: string): Bud {
  this.logger.info(
    {name: 'bud.api', function: 'bud.srcPath', dir},
    `bud.srcPath called`,
  )

  const setPath = join(this.paths.get('project'), dir)

  /**
   * If set, CLI arguments take precendence over config.
   */
  !this.args.get('src') && this.paths.set('src', setPath)

  return this
}

export {srcPath}