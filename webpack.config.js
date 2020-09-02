const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const rootDirectory = path.resolve(__dirname, './');
const {join} = require('path');
module.exports = {
  entry: './index.web.js',
  output: {
    filename: 'index.web.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({filename: './index.html'}),
  ],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /node_modules/,
        include: [
          path.resolve(rootDirectory, 'App.js'),
          path.resolve(rootDirectory, 'src'),
          path.resolve(rootDirectory, 'node_modules/react-native-uncompiled'),
          path.resolve(rootDirectory, 'node_modules/react-native-vector-icons'),
          path.resolve(rootDirectory, 'node_modules/react-navigation'),
          path.resolve(
            rootDirectory,
            'node_modules/react-native-drawer-layout',
          ),
          path.resolve(
            rootDirectory,
            'node_modules/react-native-dismiss-keyboard',
          ),
          path.resolve(
            rootDirectory,
            'node_modules/react-native-safe-area-view',
          ),
          path.resolve(
            rootDirectory,
            'node_modules/react-native-gesture-handler',
          ),
          path.resolve(rootDirectory, 'node_modules/react-native-tab-view'),
        ],
        use: {
          loader: 'babel-loader',
          // options: {
          //   cacheDirectory: true,
          //   // Babel configuration (or use .babelrc)
          //   // This aliases 'react-native' to 'react-native-web' and includes only
          //   // the modules needed by the app.
          //   plugins: [
          //     // This is needed to polyfill ES6 async code in some of the above modules
          //     // 'babel-polyfill',
          //     // This aliases 'react-native' to 'react-native-web' to fool modules that only know
          //     // about the former into some kind of compatibility.
          //     'react-native-web',
          //   ],
          //   // The 'react-native' preset is recommended to match React Native's packager
          //   //presets: ['react-native'],
          // },
        },
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '/images/',
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      'react-native-gesture-handler': require.resolve(
        'react-native-gesture-handler',
      ),
      react$: require.resolve('react'),
      'react-native$': require.resolve('react-native-web'),
      'react-dom$': require.resolve('react-dom'),
      'react-native-gesture-handler/GestureHandler': require.resolve(
        'react-native-gesture-handler/GestureHandler',
      ),
      'react-native-gesture-handler/RNGestureHandlerModule': join(
        __dirname,
        'node_modules',
        'react-native-gesture-handler/RNGestureHandlerModule.web.js',
      ),
      './RNGestureHandlerModule': join(
        __dirname,
        'node_modules',
        'react-native-gesture-handler',
        'RNGestureHandlerModule.web.js',
      ),
      './GestureHandlerButton': join(
        __dirname,
        'node_modules',
        'react-native-gesture-handler',
        'GestureHandlerButton.web.js',
      ),
      './GestureComponents': join(
        __dirname,
        'node_modules',
        'react-native-gesture-handler',
        'GestureComponents.web.js',
      ),
      './PlatformConstants': join(
        __dirname,
        'node_modules',
        'react-native-gesture-handler',
        'PlatformConstants.web.js',
      ),
      './resolveAssetSource': join(
        __dirname,
        'node_modules',
        'expo-asset',
        'build',
        'resolveAssetSource.web.js',
      ),
      './EmbeddedAssets': join(
        __dirname,
        'node_modules',
        'expo-asset',
        'build',
        'EmbeddedAssets.web.js',
      ),
      './AssetSourceResolver': join(
        __dirname,
        'node_modules',
        'expo-asset',
        'build',
        'AssetSourceResolver.web.js',
      ),
      './AssetRegistry': join(
        __dirname,
        'node_modules',
        'expo-asset',
        'build',
        'AssetRegistry.web.js',
      ),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, '.'),
    // compress: true,
    port: 9000,
  },
};
