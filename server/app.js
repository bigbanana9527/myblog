var express =require("express");
var fs = require("fs");
var path = require("path");
var multer = require('multer');
const bodyParser = require('body-parser')
var mongoose = require('mongoose');
//引入os模块
var os = require("os");
const { count } = require("console");
//record
var contents = fs.readFileSync("./public/record.json");
var data = JSON.parse(contents);

mongoose.connect('mongodb://localhost/my-blog');
var app=express();
var db = mongoose.connection;
//接收post请求的数据
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
db.on('error', console.error.bind(console, 'connection error:'));




db.once('open', function() {
    //设计建立一个表结构
    console.log('数据库连接成功')
    //博客文章表结构
var ArticleSchema = mongoose.Schema({
    aid: { type : Number, index: { unique: true } },
        title: String,
        content: String,
        tags: [String],
        date: Date,
        isPublish: Boolean,
  });
      //评论结构
var CommentSchema = mongoose.Schema({
    cid: { type : Number, index: { unique: true } },
          content: String,
          hostname:String,
          date:Date,
          ip:String,

      });
      //评论结构
var LinkSchema = mongoose.Schema({
        lid: { type : Number, index: { unique: true } },
        urladress: String,
        title:String,
        date:Date,
        discripe:String,

    });
  var Comment = mongoose.model('comments', CommentSchema);
   //将文档架构发布为模型
  var Article = mongoose.model('articles', ArticleSchema);
  var Link = mongoose.model('link', LinkSchema);
  //保存文章
  app.post('/api/postarticle', function (req, res) {
    //获取自增的aid
    Article.count((err,count)=>{
      var article={
        aid:count,
        title:req.body.title,
        content:req.body.content,
        date:req.body.date,
        isPublish:req.body.isPublish,
        tags:req.body.tags

      }
      console.log('收到发表文章请求',req.body)
      Article(article).save()
      console.log('保存成功')
    res.status(200).send('succeed in saving new passage.')
    })
    

    
  })
 // 获取某篇文章
app.get('/api/article/:aid', function (req, res)  {
    //req.params.aid为前端传入的请求参数
      console.log('收到详情页的请求')
      

      Article.findOne({aid: req.params.aid}, (err, doc) => {
      if (err) {
          console.log(err)
      } else {
          res.status(200).send(doc)
      }
  })
  
  })
  //获取全部已发表文章
  app.get('/api/articles', (req, res) => {
    Article.find({isPublish: true}).exec().then((articles)=>{
      res.send(articles)
    })
  })
  // 删除文章
app.delete('/api/article/:aid',  (req, res) => {
  Article.remove({aid: req.params.aid}, (err, data) => {
      if (err) {
          console.log(err)
      } else {
        res.send(data)
      }
  })

})
  //获取全部已发表评论
  app.get('/api/comment', (req, res) => {
    Comment.find().exec().then((comments)=>{
      res.send(comments)
    })
  })
  //
app.post('/api/comment', function (req, res) {
  //获取自增的aid
  Comment.count((err,count)=>{
    console.log('收到评论请求',req.body)
    var comment={
      cid:count,
      content:req.body.content,
      hostname:req.header('???'),
      ip:req.header('x-forwarded-for') || req.connection.remoteAddress,
      date:req.body.date

    }
   
    console.log('设备为',os.cpus())
    Comment(comment).save()
    console.log('保存成功')
  res.status(200).send('succeed in saving new passage.')
  })
  

  
})
  //获取全部已添加的链接
  app.get('/api/link', (req, res) => {
    Link.find().exec().then((links)=>{
      res.send(links)
    })
  })
app.post('/api/postlink', function (req, res) {
  Link.count((err,count)=>{
    var link={
      lid:count,
      title:req.body.title,
      urladress:req.body.urladress,
      date:req.body.date,
      discripe:req.body.discripe,
    }
    console.log('收到发表链接请求',req.body)
    Link(link).save()
    console.log('保存成功')
  res.status(200).send('succeed in saving new link.')

  
})
  
})
//后端做分页查询
// app.get('/api/article', (req, res) => {
//   //const urlModule = require('url');
//   let params = urlModule.parse(req.url, true).query;
//   //当前页数,如果用户传了这个参数，那就以用户传的为准。如果用户没传，那就默认是 第一页
//   const page = params.page
//   //每页显示多少条,默认为10
//   const limit = params.limit||8
//   //从哪里开始（offset）
//   const skip = limit * (page - 1 )
//   Article.find({
//     isPublish: true,
// }).limit(limit).skip(skip).exec().then((articles)=>{
//   res.send(articles)
// })
 

// })



})



var storage = multer.diskStorage({
    destination: function (req, file, cb){
      cb(null, path.join(__dirname , './public/resource'));
    },
    filename: function (req, file, cb){
      cb(null, file.originalname);
    }
  });
  var upload = multer({
    storage: storage
  }).single('img');
  
//拦截请求
//开发静态资源
app.use('/public/',express.static('./public/'))
//前端上传图片
app.post('/api/uploadimage', function (req, res) {
    upload(req, res, function (err) {
      console.log('-----------------开始上传------------------');
      if (err) {
        console.log(err);
        res.writeHead(404);
        res.end(err.message);
        return
      }
      let url = 'http://' + 'localhost:8083' + '/public/resource/' + req.file.originalname
      res.writeHead(200);
      res.end(JSON.stringify({'url': url}));
      console.log('-----------------上传完成------------------');
      console.log('-----------------文件信息: ');
      console.log(req.file ? req.file : '文件错误');
    })
    
  })
    //获取record
    app.get('/api/records',(req,res)=>{
      var data = JSON.parse(contents);
      res.send(data)
    })
  app.listen("8083",function () {
    console.log("服务启动")
});