const atImport = require('postcss-import')

const plugins = [
  require('postcss-easy-import'),
  require('autoprefixer'),
  require('postcss-nested'),
  require('postcss-utilities')(),
  require('postcss-selector-matches'),
  require('postcss-pseudo-is'),
  require('postcss-selector-prefixer')({ prefix: 'zrook-' }),
]

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    atImport({ path: './src' }),
    ...plugins,
  ],
}

module.exports = config
