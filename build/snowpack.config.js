/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  exclude: [
    '**/node_modules/**/*',
    '**/.idea/**/*',
  ],
  // optimize: {
  //   bundle: true,
  //   splitting: true,
  //   minify: true,
  //   treeshake: true,
  //   target: 'es2020',
  //   // target: 'es2015',
  // },
  packageOptions: {
    // source: 'remote',
    types: true,
  },
  buildOptions: {

  },
  // plugins: ['@snowpack/plugin-typescript'],
};

