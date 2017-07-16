var express=require('express');
var path=require('path');
var ejs=require('ejs');
var index = require('./routes/index');
//var routes=require("./routes");
var app=express();
//express服务器的配置
//app.set('port',3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
//app.use(app.router);
app.use(express.static(path.join(__dirname,'public')));
app.use('/',index);
app.use('/getscore',index);
app.listen(3000);