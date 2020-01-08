const path = require('path')

module.exports = {
  publicPath: '/',
  outputDir: process.env.outputDir,
  lintOnSave: true
  // output: {
  //   path: path.resolve(__dirname, './dist'),
  //   publicPath: '/dist/',
  //   filename: 'el-upload-repackage.min.js',
  //   library: 'Upload',
  //   libraryTarget: 'umd',
  //   umdNamedDefine: true
  // }
}
