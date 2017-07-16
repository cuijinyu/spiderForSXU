/**
 * Created by 崔晋瑜 on 2017/7/14.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express',describe:'OK' });
});
router.post('/getscore',function(req,res,next){
    console.log(req.body);
});
module.exports = router;
