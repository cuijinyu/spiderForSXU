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
var sxuSpider=new spider();
/* GET home page. */
router.get('/', function(req, res, next) {
    sxuSpider.getCheckNumber();
    setTimeout(function () {
        res.render('index', { title: 'Express',describe:'OK' });
    },3000);
});
router.post('/getscore',function(req,res,next){
    console.log(req.body);
    message.id=req.body.id;
    message.password=req.body.password;
    message.checkNumber=req.body.checkNumber;
    sxuSpider.login(message.id,message.password,message.checkNumber,function () {
        res.render('score','');
    })
});
router.get('/score',function (req,res,next) {
    res.render('score','');
});
module.exports = router;
module.exports.message=message;
