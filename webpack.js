

configuration = {
  plugins: [
    /**
     * DefinePlugin
     * 内置，配置编译时全局常量
    **/
    new webpack.DefinePlugin({
      // 定义为代码片段，最后转化为字符串
      ENV: JSON.stringify('dev'),
      ENV: '"dev"',
      // 定义为typeof
      'typeof window': JSON.stringify('object')
    }),

    /**
     * UglifyJsPlugin
     * 内置，或引入uglifyjs-webpack-plugin，压缩
    **/
    new webpack.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        wraning: false
      }
    }),

    /**
     * CommonsChunkPlugin
     * 内置，提取公用模块chunk
    **/
  ]
}
