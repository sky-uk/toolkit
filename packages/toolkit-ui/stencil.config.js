const sass = require('@stencil/sass');

exports.config = {
  namespace: 'components',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: false
    }
  ],
  plugins: [
    sass({ includePaths: ['../../packages/', '../../packages/sky-toolkit-core/node_modules/'] })
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
