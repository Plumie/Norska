const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

if (process.env.NODE_ENV === 'development') {
  module.exports = {
    mode: 'development',
    entry: './test/main.ts',
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public')
    },
    plugins: [
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        server: { baseDir: ['./'] },
        files: ['./**/*.html', './dist/*.js']
      })
    ]
  };
} else if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mode: 'production',
    entry: './src/main.ts',
    plugins: [new CompressionPlugin()],
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js'],
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    externals: {
      three: 'three'
    },
    output: {
      filename: 'bundle.js',
      library: 'Norska',
      libraryTarget: 'umd',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    }
  };
}
