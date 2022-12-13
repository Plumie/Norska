const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main.ts',
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
    }
};
