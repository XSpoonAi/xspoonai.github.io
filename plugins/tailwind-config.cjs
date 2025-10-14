const path = require('path');

function tailwindPlugin(context, options) {
  return {
    name: 'docusaurus-tailwindcss',
    configurePostCss(postcssOptions) {
      postcssOptions.plugins.push(require('tailwindcss'), require('autoprefixer'));
      return postcssOptions;
    },
  };
}

module.exports = tailwindPlugin;
