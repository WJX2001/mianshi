// TODO: loader 处理scss css sass

module.exports = {
    module: {
        rules: [
            {   
                // 配置设置了一个规则，适用于任何".css"扩展名的文件。
                test: /\.css$/,
                // 规则指定了一系列加载器，他们将在打包过程中应用于CSS文件
                use: [
                    { loader: 'style-loader' },  // 通过创建一个<style>标签将CSS注入到DOM中
                    {
                        loader: 'css-loader',   // 处理CSS本身
                        options: {
                            module:true     // true: 表示启动了CSS模块，CSS模块是一种本地作用域CSS类的方式，防止全局CSS命名空间污染
                        }
                    },
                    { loader: 'sass-loader'} // 负责处理Sass 文件并将其转换为CSS
                ]
            }
        ]
    }
}
