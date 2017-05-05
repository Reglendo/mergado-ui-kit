const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require("webpack");
const path = require("path");
const autoprefixer = require('autoprefixer');

module.exports = {
    title: '/ MUK / Mergado UI Kit',
    highlightTheme: 'rubyblue',
    serverPort: '3001',
    sections: [
        {
            name: 'Helpers',
            content: './src/docs/helpers/Readme.md'
        },
        {
            name: 'Form',
            components: './src/components/Forms/**/*.tsx',
            content: './src/components/Forms/Readme.md'
        },
        {
            name: 'Components',
            components: './src/components/**/*.tsx'
        }
    ],
    propsParser: require('react-docgen-typescript').parse,
    showCode: true,
    styleguideDir: path.join(__dirname, 'docs'),
    updateWebpackConfig(webpackConfig) {
        // Your source files folder or array of folders, should not include node_modules
        const dir = path.join(__dirname, 'docs');

        webpackConfig.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx','.json'];

        webpackConfig.resolve.alias['rsg-components/StyleGuide/StyleGuideRenderer'] =
            path.join(dir, 'components/StyleGuide');

        webpackConfig.resolve.alias['rsg-components/Playground'] =
            path.join(dir, 'components/Playground');

        webpackConfig.resolve.alias['rsg-components/Playground/PlaygroundRenderer'] =
            path.join(dir, 'components/Playground/PlaygroundRenderer');

        webpackConfig.resolve.alias['rsg-components/Preview'] =
            path.join(dir, 'components/Preview');
    
        webpackConfig.resolve.alias['rsg-components/ReactComponent/ReactComponentRenderer'] =
            path.join(dir, 'components/ReactComponent');

        webpackConfig.resolve.alias['rsg-components/Editor'] =
            path.join(dir, 'components/Editor');


        webpackConfig.module.loaders.push(
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: 'babel',
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style!css?modules&importLoaders=1'
            },
            {
                include: /.*/,
                loader: 'ts-loader',
                test: /\.(ts|tsx)$/,
                options: {
                    configFileName: "./tsconfig.json"

                }
            }

        );

        if (process.env.NODE_ENV === 'production') {
            webpackConfig.module.loaders.push(
                {
                    test: /\.sass$/,
                    exclude: /node_modules/,
                    loader: ExtractTextPlugin.extract({
                        loader: 'css-loader?-autoprefixer!postcss-loader!sass-loader'
                    })

                }
            );
        } else {
            webpackConfig.module.loaders.push(
                {
                    test: /\.sass$/,
                    exclude: /node_modules/,
                    loader: 'style-loader!css-loader!sass-loader'
                }
            );
        }


        webpackConfig.plugins.push(
            new ExtractTextPlugin({ filename: 'dist/css/styleguide.css',
                allChunks: true
            })
        );

        return webpackConfig;
    },
};