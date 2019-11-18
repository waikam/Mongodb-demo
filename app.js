// 引入http模块
const http = require('http')
// 导入连接数据库模块
require('./model/connect')
// 引入path模板
const path = require('path')
// 引入模板引擎
const template = require('art-template')
// 引入静态资源访问模块
const serveStatic = require('serve-static')
// 实现静态资源访问服务
const serve = serveStatic(path.join(__dirname, 'public'))
// 引入处理日期的第三方模块
const dateformat = require('dateformat')
// 引入路由模块
const router = require('./router/index')

// 配置模板的根目录
template.defaults.root = path.join(__dirname, 'views')
// 处理日期格式的方法
template.defaults.imports.dateformat = dateformat
// 创建网站服务器
const app = http.createServer()

// 当客户端访问服务器端的时候
app.on('request', (req, res) => {
    // 调用router方法
    router(req, res, () => {})
    // 启用静态资源访问服务功能
    serve(req, res, () => {})
})

// 监听端口
app.listen(80)
console.log('服务器启动成功')