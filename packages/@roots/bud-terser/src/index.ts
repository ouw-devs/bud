import './interface'
import * as terserWebpackPlugin from './terser-webpack-plugin'
import {Bud} from '@roots/bud'

// Extension name
export const name = '@roots/bud-terser'

// Extension config api
export * as api from './api'

// Extension boot
export const boot: Bud.Module.Boot = bud => {
  bud.extensions.add(
    'terser-webpack-plugin',
    terserWebpackPlugin,
  )
}