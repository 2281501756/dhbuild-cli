import { Configuration } from 'webpack'
import { merge } from 'webpack-merge'
import baseConfig from './webpack.base'
import CopyPlugin from 'copy-webpack-plugin'
import path from 'path'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const prodConfig: Configuration = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, '../public'),
          to: path.join(__dirname, '../dist'),
          filter: (source) => !source.includes('index.html'),
        },
      ],
    }),
    new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css', // 抽离css的输出目录和名称
    }),
    new CssMinimizerPlugin(),
    new CompressionPlugin({
      test: /\.(js|css)$/, // 只生成css,js压缩文件
      filename: '[path][base].gz', // 文件命名
      algorithm: 'gzip', // 压缩格式,默认是gzip
      threshold: 10240, // 只有大小大于该值的资源会被处理。默认值是 10k
      minRatio: 0.8, // 压缩率,默认值是 0.8
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        parallel: true, // 开启多线程压缩
        terserOptions: {
          compress: {
            pure_funcs: ['console.log'], // 删除console.log
          },
        },
      }),
    ],
  },
  performance: {
    hints: false,
    maxAssetSize: 4000000, // 整数类型（以字节为单位）
    maxEntrypointSize: 5000000, // 整数类型（以字节为单位）
  },
})

export default prodConfig
