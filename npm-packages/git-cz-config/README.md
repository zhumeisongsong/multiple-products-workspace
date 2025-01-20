# @zhumeisong/git-cz-config

Semantic Git commits config with emoji. ✨🐛💄💚

Features:

- Standardized commit messages
- Emoji support
- Interactive commit prompts
- Customizable commit types

## Install

### 1. Install `git-cz`:

`pnpm install git-cz -D`

### 2. Install @zhumeisong/git-cz-config:

`pnpm install @zhumeisong/git-cz-config -D`

## Configuration

### 1. Add to package.json:

```
{
  "scripts": {
    "commit": "git-cz"
  },
  "config": {
    "commitizen": {
      "path": "git-cz"
    }
  }
}
```

### 2. Create changelog.config.cjs:

```
const gitCzConfig = require('@zhumeisong/git-cz-config');

module.exports = {
  ...gitCzConfig,
};
```

## Usage

After installation and configuration, you can use it in:

`pnpm run commit`

## Example Commit Messages

- ✨ feat: add new feature
- 🐛 fix: resolve bug
- 📝 docs: update documentation
- ♻️ refactor: restructure code
- ⚡️ perf: improve performance
- 🧪 test: add tests

## License

MIT
