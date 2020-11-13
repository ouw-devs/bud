import {ProgressPlugin} from 'webpack'
import {Bud} from '@roots/bud-typings'

export const run: Run = function (safeMode = false) {
  if (this.mode.is('development')) {
    this.server.addDevMiddleware()
    this.server.addHotMiddleware()

    this.server.config.is('proxy', undefined) &&
      this.server.addProxyMiddleware()
  }

  this.compiler.compile()

  if (safeMode) {
    this.addPlugin(
      'progress-plugin',
      new ProgressPlugin({
        activeModules: false,
        entries: true,
        modules: true,
        modulesCount: 5000,
        profile: false,
      }),
    )

    this.compiler.get().run((err, stats) => {
      if (err) {
        console.error(err)
        process.exit(1)
      }

      console.log(
        stats.toString({
          all: false,
          version: true,
          hash: true,
          builtAt: true,
          assets: true,
          colors: true,
        }),
      )
    })
  } else {
    this.cli.run()
  }
}

export type Run = (this: Bud, safeMode?: boolean) => void
