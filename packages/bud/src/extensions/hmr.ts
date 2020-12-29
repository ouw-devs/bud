import {HotModuleReplacementPlugin} from 'webpack'
import type {Module} from '@roots/bud-typings'

export const make: Module.Make = () =>
  new HotModuleReplacementPlugin()

export const when: Module.When = ({mode}) =>
  mode.is('development')