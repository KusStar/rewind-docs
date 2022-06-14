const withNextra = require('nextra')({
  theme: 'nextra-theme-rewind',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
  unstable_flexsearch: true,
})
module.exports = withNextra()
