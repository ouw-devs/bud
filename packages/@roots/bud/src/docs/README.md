- [Overview](#overview)
- [Installation](#installation)
- [Getting started](#getting-started)
  - [Running a build](#running-a-build)
  - [Configuration API](#configuration-api)
- [Extensions](#extending-core)
- [Documentation](#details)

## Overview

> A webpack framework combining the best parts of Laravel Mix and Symfony Encore.

## Installation

```sh
yarn add @roots/bud --dev
```

## Getting started

Bud centers around a configuration file situated in the root of the project. By default this file should be named `bud.config.js`.

You can use the CLI to generate a starter configuration file, if you need a jumping off point:

```sh
yarn bud publish @roots/bud-support bud.config.js
```

Dead simple `bud.config.js` example:

```js
const {bud} = require('@roots/bud')

bud.entry('app', ['app.js']).run()
```

The framework can do many more things. But, one of Bud's flagpole axioms is that more is not always better for many common use cases. In fact, just using `entry` and `run` you can already compile project files. For many people this may very well be enough.

A more advanced configuration might look like this:

```js
const {bud} = require('@roots/bud')

/**
 * Extend bud with additional functionality
 */
bud.use([
  require('@roots/bud-babel'),
  require('@roots/bud-postcss'),
  require('@roots/bud-react'),
])

/**
 * Create a dynamic link library for fast compilation
 * of the react runtime.
 */
bud.library(['react', 'react-dom'])

/**
 * Compile two separate sets of files.
 */
bud.entry({app: ['app.{js|css}']})

/**
 * When building for production, minify assets.
 * When in development, use verbose source-maps.
 */
bud.when(
  bud.isProduction,
  bud => bud.minify(),
  bud => bud.devtool('eval-source-map'),
)

/**
 * Run the build and cache the results for
 * faster rebuilds when modules are unchanged.
 */
bud.run()
```

## Example implementations

There are [example implementations available for reference in `/examples`]([[base]]/examples).

## Running a build

Once you've set up your configuration file the following command will run the build:

```sh
yarn bud build
```

You should see your built assets in the `dist` directory of your project.

### Running in `production` mode

```sh
yarn bud build --mode production
```

### Running in `development` mode

```sh
yarn bud build --mode development
```

## Configuration API

The following is a (hopefully) exhaustive list of the utilities designed to make setting up your build as easy as possible.

| Tool            | Description                  | Documentation                                   |
| --------------- | ---------------------------- | ----------------------------------------------- |
| bud.alias       | Easy module imports          | [README ↗]([[base]]/docs/config-alias.md)       |
| bud.cache       | Cache                        | [README ↗]([[base]]/docs/config-cache.md)       |
| bud.copy        | Copy files                   | [README ↗]([[base]]/docs/config-copy.md)        |
| bud.define      | Define global constants      | [README ↗]([[base]]/docs/config-define.md)      |
| bud.dev         | Configure dev server         | [README ↗]([[base]]/docs/config-dev.md)         |
| bud.devtool     | Configure sourcemaps         | [README ↗]([[base]]/docs/config-devtool.md)     |
| bud.dist        | Get the `dist` dir           | [README ↗]([[base]]/docs/config-dist.md)        |
| bud.distPath    | Define the `dist` dir        | [README ↗]([[base]]/docs/config-distPath.md)    |
| bud.entry       | Add source files             | [README ↗]([[base]]/docs/config-entry.md)       |
| bud.glob        | bud.entry but with wildcards | [README ↗]([[base]]/docs/config-glob.md)        |
| bud.hash        | Add version string to assets | [README ↗]([[base]]/docs/config-hash.md)        |
| bud.html        | Set an HTML template         | [README ↗]([[base]]/docs/config-html.md)        |
| bud.minify      | Minify assets                | [README ↗]([[base]]/docs/config-minify.md)      |
| bud.project     | Get the project root         | [README ↗]([[base]]/docs/config-project.md)     |
| bud.projectPath | Define the project root dir  | [README ↗]([[base]]/docs/config-projectPath.md) |
| bud.provide     | Define global vars           | [README ↗]([[base]]/docs/config-provide.md)     |
| bud.proxy       | Configure proxy server       | [README ↗]([[base]]/docs/config-proxy.md)       |
| bud.publicPath  | Define the public path       | [README ↗]([[base]]/docs/config-publicPath.md)  |
| bud.runtime     | Extract boilerplate          | [README ↗]([[base]]/docs/config-runtime.md)     |
| bud.src         | Get the `src` dir            | [README ↗]([[base]]/docs/config-src.md)         |
| bud.srcPath     | Define the `src` dir         | [README ↗]([[base]]/docs/config-srcPath.md)     |
| bud.storage     | Define artifacts dir         | [README ↗]([[base]]/docs/config-storage.md)     |
| bud.vendor      | Extract vendor code          | [README ↗]([[base]]/docs/config-vendor.md)      |

This isn't the last word on what is possible with Bud, just a collection of functions intended to simplify common developer needs/wants to as great a degree as possible. There are many valid ways to interact with Bud that utilize none of these functions.

## Extending

Bud, by itself, provides an intentionally sparse set of features.

In fact, much of the core of Bud is actually made up of extensions. This is to make it easy for developers and extension authors to swap out parts of the framework as needed.

Suffice to say, extensibility is a fundamental design tenant of Bud as software. You will likely want to utilize extensions in your project.

### First-party extensions

There are a number of Roots maintained extensions available to kickstart your projects. For more information on using them refer to the extension's documentation.

| Name                              | Description               | Usage                                                           | Package                                                                                                      |
| --------------------------------- | ------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| @roots/bud-babel                  | Babel support.            | [README ↗]([[base]]/packages/@roots/bud-babel)                  | ![npm](https://img.shields.io/npm/v/@roots/bud-babel.svg?color=%23525ddc&style=flat-square)                  |
| @roots/bud-compress               | Gzip/Brotli compression.. | [README ↗]([[base]]/packages/@roots/bud-compress)               | ![npm](https://img.shields.io/npm/v/@roots/bud-compress.svg?color=%23525ddc&style=flat-square)               |
| @roots/bud-emotion                | Adds emotion.             | [README ↗]([[base]]/packages/@roots/bud-emotion)                | ![npm](https://img.shields.io/npm/v/@roots/bud-emotion.svg?color=%23525ddc&style=flat-square)                |
| @roots/bud-entrypoints            | Asset manifest.           | [README ↗]([[base]]/packages/@roots/bud-entrypoints)            | ![npm](https://img.shields.io/npm/v/@roots/bud-entrypoints.svg?color=%23525ddc&style=flat-square)            |
| @roots/bud-esbuild                | Adds esbuild.             | [README ↗]([[base]]/packages/@roots/bud-esbuild)                | ![npm](https://img.shields.io/npm/v/@roots/bud-esbuild.svg?color=%23525ddc&style=flat-square)                |
| @roots/bud-eslint                 | Adds eslint support.      | [README ↗]([[base]]/packages/@roots/bud-eslint)                 | ![npm](https://img.shields.io/npm/v/@roots/bud-eslint.svg?color=%23525ddc&style=flat-square)                 |
| @roots/bud-imagemin               | Compress image assets     | [README ↗]([[base]]/packages/@roots/bud-imagemin)               | ![npm](https://img.shields.io/npm/v/@roots/bud-imagemin.svg?color=%23525ddc&style=flat-square)               |
| @roots/bud-library                | DLL support               | [README ↗]([[base]]/packages/@roots/bud-library)                | ![npm](https://img.shields.io/npm/v/@roots/bud-library.svg?color=%23525ddc&style=flat-square)                |
| @roots/bud-mdx                    | DLL support               | [README ↗]([[base]]/packages/@roots/bud-mdx)                    | ![npm](https://img.shields.io/npm/v/@roots/bud-mdx.svg?color=%23525ddc&style=flat-square)                    |
| @roots/bud-postcss                | PostCss support.          | [README ↗]([[base]]/packages/@roots/bud-postcss)                | ![npm](https://img.shields.io/npm/v/@roots/bud-postcss.svg?color=%23525ddc&style=flat-square)                |
| @roots/bud-prettier               | Prettier support.         | [README ↗]([[base]]/packages/@roots/bud-prettier)               | ![npm](https://img.shields.io/npm/v/@roots/bud-prettier.svg?color=%23525ddc&style=flat-square)               |
| @roots/bud-purgecss               | PurgeCss support.         | [README ↗]([[base]]/packages/@roots/bud-purgecss)               | ![npm](https://img.shields.io/npm/v/@roots/bud-purgecss.svg?color=%23525ddc&style=flat-square)               |
| @roots/bud-react                  | React support.            | [README ↗]([[base]]/packages/@roots/bud-react)                  | ![npm](https://img.shields.io/npm/v/@roots/bud-react.svg?color=%23525ddc&style=flat-square)                  |
| @roots/bud-sass                   | Sass support.             | [README ↗]([[base]]/packages/@roots/bud-sass)                   | ![npm](https://img.shields.io/npm/v/@roots/bud-sass.svg?color=%23525ddc&style=flat-square)                   |
| @roots/bud-stylelint              | Stylelint support.        | [README ↗]([[base]]/packages/@roots/bud-stylelint)              | ![npm](https://img.shields.io/npm/v/@roots/bud-stylelint.svg?color=%23525ddc&style=flat-square)              |
| @roots/bud-tailwindcss            | Tailwindcss support.      | [README ↗]([[base]]/packages/@roots/bud-tailwindcss)            | ![npm](https://img.shields.io/npm/v/@roots/bud-tailwindcss.svg?color=%23525ddc&style=flat-square)            |
| @roots/bud-terser                 | Terser support.           | [README ↗]([[base]]/packages/@roots/bud-terser)                 | ![npm](https://img.shields.io/npm/v/@roots/bud-terser.svg?color=%23525ddc&style=flat-square)                 |
| @roots/bud-typescript             | TypeScript support.       | [README ↗]([[base]]/packages/@roots/bud-typescript)             | ![npm](https://img.shields.io/npm/v/@roots/bud-typescript.svg?color=%23525ddc&style=flat-square)             |
| @roots/bud-vue                    | Vue framework support.    | [README ↗]([[base]]/packages/@roots/bud-vue)                    | ![npm](https://img.shields.io/npm/v/@roots/bud-vue.svg?color=%23525ddc&style=flat-square)                    |
| @roots/bud-wordpress-dependencies | WP dependencies.          | [README ↗]([[base]]/packages/@roots/bud-wordpress-dependencies) | ![npm](https://img.shields.io/npm/v/@roots/bud-wordpress-dependencies.svg?color=%23525ddc&style=flat-square) |
| @roots/bud-wordpress-externals    | WP externals.             | [README ↗]([[base]]/packages/@roots/bud-wordpress-externals)    | ![npm](https://img.shields.io/npm/v/@roots/bud-wordpress-externals.svg?color=%23525ddc&style=flat-square)    |
| @roots/bud-wordpress-manifests    | WP asset manifest.        | [README ↗]([[base]]/packages/@roots/bud-wordpress-manifests)    | ![npm](https://img.shields.io/npm/v/@roots/bud-wordpress-manifests.svg?color=%23525ddc&style=flat-square)    |

### Third-party extensions

Have you produced a Bud extension and want to share it here? Please, create an issue sharing information about your project.

## Documentation and details

- [Documentation index]([[base]]/docs/README.md)
- [Configuration guide]([[base]]/docs/config.md)
- [Setting the compilation mode]([[base]]/docs/components-mode.md)
- [Working with containers]([[base]]/docs/components-container.md)
- [Working with env values]([[base]]/docs/components-env.md)
- [Toggling feature flags]([[base]]/docs/components-features.md)
- [Working with the filesystem]([[base]]/docs/components-filesystem.md)
- [Using hooks]([[base]]/docs/components-hooks.md)
- [Bud CLI]([[base]]/docs/cli.md)

## Typescript

Bud is written in TypeScript but supports JS and TS projects. For TS users most project typings can be sourced from [@roots/bud-typings](packages/typings).
