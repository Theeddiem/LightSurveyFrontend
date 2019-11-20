module.exports = {

  // devServer: {
  //   proxy:{
  //     'api':{
  //       target: 'http://localhost:5000'
  //     }
  //   }
  // },


  chainWebpack: config => {
    config.module.rules.delete('eslint')
}
}

