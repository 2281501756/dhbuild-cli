import { Configuration as webpackConfiguration } from 'webpack'
import { Configuration as webpackDevServerConfiguration } from 'webpack-dev-server'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import baseConfig from './webpack.base'
import { merge } from 'webpack-merge'
import path from 'path'

interface Configuration extends webpackConfiguration {
  devServer?: webpackDevServerConfiguration
}

const devConfig: Configuration = merge(baseConfig, {
  mode: 'development',
  plugins: [new ReactRefreshWebpackPlugin()],
  devServer: {
    host: '127.0.0.1',
    port: '8080',
    compress: false,
    hot: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '../public'),
    },
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
})

export default devConfig
