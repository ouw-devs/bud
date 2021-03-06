<p align="center">
  <img alt="Bud" src="https://cdn.roots.io/app/uploads/logo-bud.svg" height="100">
</p>

<p align="center">
  <img alt="MIT License" src="https://img.shields.io/github/license/roots/bud?color=%23525ddc&style=flat-square">
  <a href="https://twitter.com/rootswp">
    <img alt="Follow Roots" src="https://img.shields.io/twitter/follow/rootswp.svg?style=flat-square&color=1da1f2" />
  </a>
</p>

<h1 align="center">
  <strong>@roots/merged-manifest-webpack-plugin</strong>
</h1>

## Overview

When utilizing both `@roots/entrypoints-webpack-plugin` and `@roots/wordpress-externals-webpack-plugin` redundant manifests are generated.

This plugin merges the dependencies arrays from `wordpress.json` into the `entrypoints.json` manifest. It then deletes `wordpress.json`.

This plugin can be used separately from the Bud framework.

## Really, three plugins?

Yes, because:

1. `entrypoints.json` has utility outside of WordPress ecosystem.
2. `wordpress.json` has utility even if you prefer using the bog standard `manifest.json`.
3. If using both plugins then you end up with three manifest artifacts, `entrypoints.json`, `manifest.json` and `wordpress.json`. This is unnecessary.

## Requirements

- `@roots/entrypoints-webpack-plugin`
- `@roots/wordpress-externals-webpack-plugin`

## Usage

```js
// webpack.config.js

module.exports = {
  plugins: [
    // Include required companion plugins.
    new EntrypointsWebpackPlugin(),
    new WordPressExternalsPlugin(),
    // Instantiate the plugin object.
    new MergedManifestPlugin(),
  ],
}
```

## Options

| Option | type | Description |
| ------ | ---- | ----------- |
| entrypointsName | string | `entrypoints.json` filename (if customized) |
| wordpressName | string | `wordpress.json` filename (if customized) |
| file | string | filename for final entrypoints manifest |

## Contributing

Contributions are welcome from everyone.

We have [contributing guidelines](https://github.com/roots/guidelines/blob/master/CONTRIBUTING.md) to help you get started.

## Bud sponsors

Help support our open-source development efforts by [becoming a patron](https://www.patreon.com/rootsdev).

## Community

Keep track of development and community news.

- Participate on the [Roots Discourse](https://discourse.roots.io/)
- Follow [@rootswp on Twitter](https://twitter.com/rootswp)
- Read and subscribe to the [Roots Blog](https://roots.io/blog/)
- Subscribe to the [Roots Newsletter](https://roots.io/subscribe/)
- Listen to the [Roots Radio podcast](https://roots.io/podcast/)
