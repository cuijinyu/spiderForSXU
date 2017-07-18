/**
 * Created by 崔晋瑜 on 2017/7/14.
 */
var express = require('express');
var form=require('formidable');
var spider=require("../spider/spider")
var router = express.Router();
var message={
    id:'',
    password:'',
    checkNumber:''
};
var count=0;
var spiders=[];
var spiderSXU1=new spider();
var spiderSXU2=new spider();
var spiderSXU3=new spider();
spiders.push(spiderSXU1);
spiders.push(spiderSXU2);
spiders.push(spiderSXU3);
/* GET home page. */
router.get('/', function(req, res, next) {
    if(count==2){
        count=0;
    }else{
        count++;
    }
    spiders[count].setID(count);
    spiders[count].getCheckNumber();
    res.cookie("id",count);
    setTimeout(function () {
        res.render('index', { title: 'Express',describe:'OK' });
    },10000);
});
router.post('/getscore',function(req,res,next){
    var theSpider;
    console.log(req.cookies);
    for(i=0;i<spiders.length;i++){
        if(req.cookies.id==spiders[i].getID())
        {
           theSpider=spiders[i];
        }
    }
    console.log(req.body);
    message.id=req.body.id;
    message.password=req.body.password;
    message.checkNumber=req.body.checkNumber;
    theSpider.login(message.id,message.password,message.checkNumber,function () {
        res.render('score','');}
    )
});
router.get('/score',function (req,res,next) {
    res.render('score','');
});
module.exports = router;
module.exports.message=message;
