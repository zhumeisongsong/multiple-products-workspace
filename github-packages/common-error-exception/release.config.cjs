const { createMonorepoReleaseConfig } = require('@zhumeisong/semantic-release-config');

const name = 'common-error-exception';
const srcRoot = `github-packages/${name}`;
const pkgRoot = `dist/github-packages/${name}`;

module.exports = createMonorepoReleaseConfig({
  name,
  srcRoot,
  pkgRoot,
});
