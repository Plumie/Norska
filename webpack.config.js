const path = require('path');

const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: './src/main.ts',
    plugins: [new CompressionPlugin()],
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    externals: {
        three: 'three',
    },
    output: {
        filename: 'bundle.js',
        library: 'Norska',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    }
};
