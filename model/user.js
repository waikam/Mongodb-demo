// 引入mongoose
const mongoose = require('mongoose')

// 设定学生集合规则
const studentsSchema = new mongoose.Schema({
	name: {
		type: String, // 数值类型
		required: true, // 必填字段
		minlength: 2, // 最小字符长度
		maxlength: 10 // 最大字符长度
	},
	age: {
		type: Number,
		min: 10, // 最小值
		max: 25 // 最大值
	},
	gender: {
		type: String
	},
	email: String,
	hobbies: [String],
	collage: String,
	enterDate: { // 入学日期
		type: Date,
		default: Date.now // 默认值： 用户填写的当前时间
	}
})

// 创建学生信息集合
const Student = mongoose.model('Student', studentsSchema)

// 将学生信息集合进行导出
module.exports = Student