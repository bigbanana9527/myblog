var express =require("express");
var path = require("path");
var multer = require('multer');
var app=express();



app.listen("8083",function () {
    console.log("服务启动")
});

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
  

app.all("/*", function(req, res, next) {
    // 跨域处理
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next(); // 执行下一个路由
})
//拦截请求
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
      let url = 'http://' + req.headers.host + 'public/resource/' + req.file.originalname
      res.writeHead(200);
      res.end(JSON.stringify({'url': url}));
      console.log('-----------------上传完成------------------');
      console.log('-----------------文件信息: ');
      console.log(req.file ? req.file : '文件错误');
    })
    
  })
  