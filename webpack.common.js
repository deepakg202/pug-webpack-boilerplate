const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob');
const files = require('./src/filenames.js');


module.exports = {

    plugins: [
        new CleanWebpackPlugin(),
        
        ...files.map((name) => new HtmlWebpackPlugin({
            template: `./src/${name}.pug`,
            filename: `${name}.html`
        })),
        
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[id].css"
        }),
        new PurgecssPlugin({
              paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`,  { nodir: true }),
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public' }
            ]
        })
    ],
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'build'),
    },


    //Twig Template Engine and Sass loader
    module: {
        rules: [{
            test: /\.pug$/,
            use: {
                loader: 'pug-loader',
                options: {},
            }
        }, {
            test: /\.s[ac]ss$/i,
            use: [
                // Extracts Css from common js
                MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader',
            ],
        }, ]



    },



};
