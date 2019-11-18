// 引入router模块
const getRouter = require('router')
// 获取路由对象
const router = getRouter()
// 引入模板引擎
const template = require('art-template')
// 引入querystring模块
const querystring = require('querystring')
// 导入user.js 模块方便使用
const Student = require('../model/user')

// 调用路由对象提供的方法创建路由
// 呈递学生档案信息页面
router.get('/add', (req, res) => {
    let html = template('add.art', {})
    res.end(html)
})
// 呈递学生档案列表页面
router.get('/list', async (req, res) => {
    // 查询学生信息
    let students = await Student.find()
    let html = template('list.art', {
        students: students
    })
    res.end(html)
})

// 实现学生信息添加功能路由
router.post('/add', (req, res) => {
    // 接受post请求参数
    let formData = ''
    req.on('data', param => {
        formData += param
    })
    req.on('end', async () => {
        await Student.create(querystring.parse(formData))
        res.writeHead(301, {
            Location: '/list'
        })
        res.end()
    })
})

module.exports = router