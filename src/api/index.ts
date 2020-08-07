import type {Api} from './types'
import {use} from './use'
import {alias} from './alias'
import {auto} from './auto'
import {babel} from './babel'
import {bundle} from './bundle'
import {compile} from './compile'
import {config} from './config'
import {copy} from './copy'
import {copyAll} from './copyAll'
import {debug} from './debug'
import {dist} from './dist'
import {distPath} from './distPath'
import {dev} from './dev'
import {devtool} from './devtool'
import {dump} from './dump'
import {env} from './env'
import {eslint} from './eslint'
import {glob} from './glob'
import {hash} from './hash'
import {hot} from './hot'
import {inlineManifest} from './inlineManifest'
import {map} from './map'
import {mini} from './mini'
import {postCss} from './postcss'
import {preset} from './preset'
import {project} from './project'
import {projectPath} from './projectPath'
import {publicPath} from './publicPath'
import {purge} from './purge'
import {splitting} from './splitting'
import {src} from './src'
import {srcPath} from './srcPath'
import {scss} from './scss'
import {stylelint} from './stylelint'
import {sync} from './sync'
import {target} from './target'
import {terser} from './terser'
import {vendor} from './vendor'
import {watch} from './watch'

/**
 * Bud.Bud export
 */
export const api: Api = {
  alias,
  auto,
  babel,
  bundle,
  compile,
  config,
  copy,
  copyAll,
  debug,
  dev,
  devtool,
  dist,
  distPath,
  dump,
  eslint,
  glob,
  hash,
  hot,
  inlineManifest,
  map,
  mini,
  postCss,
  preset,
  project,
  projectPath,
  publicPath,
  purge,
  scss,
  splitting,
  src,
  srcPath,
  stylelint,
  sync,
  target,
  terser,
  use,
  vendor,
  watch,
}
