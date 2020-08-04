import type {Preset} from './types'

const preset: Preset = function (presetKey: string): any {
  if (! this.presets.has(presetKey)) {
    this.logger.error({name: 'api.preset', presetKey}, `Preset key doesn't exist in presets repository.`)
  }

  const presetPath = this.presets.get(presetKey)

  if (!presetPath) {
    this.logger.error({name: 'api.preset', presetKey}, `Preset key is not valid.`)
  }

  return require(presetPath)
}

export {preset}
