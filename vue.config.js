module.exports={
    devServer:{
        proxy:'http://localhost:8083'
    },
    configureWebpack: { externals: 'hls.js' } // 在这配置webpack的externals这个字段
}