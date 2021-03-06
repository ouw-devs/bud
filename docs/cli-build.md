---
description: Compile project assets by running bud.config.js with Node.
---

# Compiling assets

Assets are compiled with the `bud build` command.

```sh
bud build
```

If run without any arguments it is the equivalent of entering:

```sh
bud build --mode production --manifest --cache
```

## Arguments

### Compiling in `production` mode

```sh
bud build --mode production
```

### Compiling in `development` mode

```sh
bud build --mode development
```

### Run in CI mode

Simpler output for better compatibility and build artifacts.

```sh
bud build --ci
```

### Debugging

Dumps extra information and build objects to disk (`.bud/records`).

```sh
bud build --debug
```

### Logging

Log verbose output for debugging

```sh
bud build --log
```

### Autodiscover

Automatically discover and utilize installed packages.

```sh
bud build --autodiscover
```

### Minify assets

```sh
bud build --minify
```

### Hash compiled asset filenames

```sh
bud build --hash
```

### Produce a `vendor` bundle

```sh
bud build --vendor
```

### Produce a `runtime` bundle

```sh
bud build --runtime
```

### Specify a devtool (source-maps)

```sh
# Enable source-maps
bud build --devtool

# Specify a specific devtool
bud build --devtool cheap-eval-source-map
```

### Specify `src` directory

```sh
bud build --src resources
```

### Specify `dist` directory

```sh
bud build --dist distributables
```

### Specify `node_modules` directory

```sh
bud build --modules ../path-to-node_modules
```

### Specify `storage` directory

```sh
bud build --storage new/storage/dir
```

### Produce with an html template

```sh
bud build --html
```

### Produce a manifest

```sh
bud build --manifest
```
