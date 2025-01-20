# @zhumeisong/semantic-release-config

[semantic-release](https://github.com/semantic-release/semantic-release) automates the whole package release workflow including: determining the next version number, generating the release notes, and publishing the package.

Here is the semantic release config for Nx monorepos and Monolithic repositories.

## Features

- 📊 Commit analyzer - Determines version bumps from commit messages
- 📝 Release notes generator - Creates detailed release notes
- 📄 Changelog generation - Maintains CHANGELOG.md
- 📦 NPM publishing - Publishes to NPM registry
- 🎉 GitHub release - Creates GitHub releases
- 🔄 Git asset updates - Updates package.json and other files

## Installation

### 1. Install related packages:

Nx monorepo repository:

`pnpm install semantic-release semantic-release-npm-github-publish @semantic-release/changelog @semantic-release/git semantic-release-plus -D`

Monolithic repository:

`pnpm install semantic-release semantic-release-npm-github-publish @semantic-release/changelog @semantic-release/git -D`

### 2. Install this config:

`pnpm install @zhumeisong/semantic-release-config -D`

## Configuration

### 1. Create a `release.config.cjs` file:

In nx monorepo repository, create a `release.config.cjs` file in your package root:

```
const { createMonorepoReleaseConfig } = require('@zhumeisong/semantic-release-config');

const name = 'common-error-exception';
const srcRoot = `npm-packages/${name}`;
const pkgRoot = `dist/npm-packages/${name}`;
const branches = [
  {
    name: 'main',
  },
];

module.exports = createMonorepoReleaseConfig({
  name,
  srcRoot,
  pkgRoot,
   branches,
});

```

In monolithic repository, create a `release.config.cjs` file in your project root:

```
const { createMonolithicReleaseConfig } = require("@zhumeisong/semantic-release-config");

const srcRoot = "./";
const pkgRoot = "./";

module.exports = createMonolithicReleaseConfig({
  srcRoot,
  pkgRoot,
});

```

### 2. Add `release` command:

In nx monorepo repository, add `release` command to each package's `project.json`:

```
 "release": {
      "executor": "nx:run-commands",
      "outputs": [],
      "options": {
        "command": "pnpm exec semantic-release-plus --extends ./xxx/release.config.cjs",
        "parallel": false
      }
    }
```

In monolithic repository, add `release` command to `package.json`:

```
{
  "release": {
    "branches": [
      "main"
    ]
  }
}

```

## Configuration Options

### name

The name of your package. Used in tag format and release message.

type: `string`

default: ``

example: `@zhumeisong/semantic-release-config`

### srcRoot

The source directory of your package.

type: `string`

default: `./`

example: `npm-packages/semantic-release-config`

### pkgRoot

The build directory of your package.

type: `string`

default: `dist/`

example: `dist/npm-packages/semantic-release-config`

### branches

The branches you want to release from.

type: `{ name: string }[]`

default: `[{ name: 'main' }]`

## Usage

In github actions, add the following steps:

Nx monorepo repository:

```
- name: Publish to npm
  env:
    GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
    NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}} // publish to npm
    NPM_TOKEN: ${{secrets.GITHUB_TOKEN}}    // publish to github
  run: |
    pnpm nx run-many -target=release --projects="npm-packages/*"
```

Monolithic repository:

```
- name:  Run semantic-release
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  run: pnpm semantic-release
```

## License

MIT
