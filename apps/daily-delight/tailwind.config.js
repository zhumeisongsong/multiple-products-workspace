const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const TailwindConfig = require('@shared/ui/tailwind.config');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...TailwindConfig,
  content: [
    ...TailwindConfig.content,
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ]
};
