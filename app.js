var express = require('express')
var path = require('path')
var port = process.env.PORT ||3000
var app = express()
var serveStatic = require('serve-static')
var bodyParser = require('body-parser')

app.set('views', './views/pages')
app.set('view engine', 'jade')
// 格式化提交的表单数据
app.use(bodyParser.urlencoded())
// 让express去到指定的路径去找静态资源，如css、js
app.use(serveStatic('bower_components'))
app.listen(port)

console.log('start at '+port)

// index page
app.get('/', function(req, res){
	res.render('index', {
		title: '首页',
		movies: [{
			title: '机械战警',
			_id: 1,
			poster: '//www.baidu.com/img/bd_logo1.png'
		},{
			title: '机械战警2',
			_id: 2,
			poster: '//www.baidu.com/img/bd_logo1.png'
		},{
			title: '机械战警3',
			_id: 3,
			poster: '//www.baidu.com/img/bd_logo1.png'
		}]
	})
})

// detail page
app.get('/movie/:id', function(req, res){
	res.render('detail', {
		title: '详情页',
		movie: {
			doctor: '何塞.帕蒂利亚',
			country: '美国',
			title: '机械战警',
			year: 2017,
			poster: 'http://sogou.com',
			language: '英语',
			flash: 'http://player.youku.com/player.php/sid/XNjA!Njc0NTUy/v.swf',
			summary: '这就是神奇的电影简介，呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵呵。'
		}
	})
})

// admin page
app.get('/admin/movie', function(req, res){
	res.render('admin', {
		title: '后台录入页',
		movie: {
			title: '',
			doctor: '',
			country: '',
			year: '',
			poster: '',
			flash: '',
			summary: '',
			language: ''
		}
	})
})

// list page
app.get('/admin/list', function(req, res){
	res.render('list', {
		title: '电影列表',
		movies: [{
			title: '机械战警',
			_id: 1,
			doctor: '玄哥',
			country: '美国',
			year: 2017,
			language: '英语',
			flash: 'http://player.youku.com/player.php/sid/XNjA!Njc0NTUy/v.swf'
		}]
	})
})