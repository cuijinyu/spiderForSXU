require('chromedriver');
var bodyParser=require('body-parser');
var express=require('express');
var path=require('path');
var ejs=require('ejs');
var index = require('./routes/index');
var cookieParser=require('cookie-parser')
//var routes=require("./routes");
var app=express();
//express服务器的配置
//app.set('port',3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(cookieParser());//使用cookie
//app.use(app.router);
app.use(express.static(path.join(__dirname,'public')));
app.use('/',index);
app.use('/getscore',index);
app.use('/score',index);
app.listen(3000);
const fs=require('fs');
const readline=require("readline");
const gm=require("gm");
//var imageMagick = gm.subClass({ imageMagick: true });
var rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
/*driver.get("http://bkjw.sxu.edu.cn/")
    .then(function(){
        driver.switchTo().frame(0);
    })
    .then(function(){
       // console.log(driver.getPageSource().then(function(data){
        //    console.log(data);
      //  }));
        driver.findElement(By.id("txt_sdertfgsadscxcadsads")).click();
       // console.log(checkImg);
        fs.writeFile("check.png",checkImg,'binary',function(err)
        {
            if(err)
            {
                console.log(err);
            }else
            {
                console.log("successful");
            }
        })
        //var id=driver.findElement(By.id("txt_asmcdefsddsd"));
        //var pass=driver.findElement(By.id("txt_pewerwedsdfsdff"));
        //console.log(driver.text());
        driver.takeScreenshot()
            .then(function(data){
                fs.writeFile("check.png", data.replace(/^data:image\png;base64/,''), "base64", function(err){
                    if(err){
                        console.log("down fail");
                    }
                    console.log("down success");
                    });
                }).then(function(){
                    gm("check.png").crop(100,25,190,350).write("checkNumber.png",function(err)
                    {
                        if(err){
                            console.log(err);
                        }else
                        {
                            console.log("write successful");
                        }
                    });
                })
    })
    .then(function(){
        driver.wait(function(){
            return index.message.id!=''&&index.message.password!='';
        },1000000);
        driver.findElement(By.id("txt_asmcdefsddsd")).sendKeys(index.message.id);
        driver.findElement(By.id("txt_pewerwedsdfsdff")).sendKeys(index.message.password);
        var checkNumber='';
       rl.on("line",function(check){
            checkNumber=check;
            rl.close();
        })
        rl.on("close",function(){
            console.log("Ok!");
            driver.findElement(By.id("txt_sdertfgsadscxcadsads")).sendKeys(checkNumber);
            //process.exit(0);
        })
      // checkNumber=index.message.checkNumber;
       driver.wait(function(){
            return checkNumber!='';
        },100000)
    })
    .then(function(){
        console.log("successful");
        driver.findElement(By.xpath('//*[@id="Logon"]/table/tbody/tr[2]/td/table/tbody/tr[5]/td/input[1]')).click();
        setTimeout(function(){
            driver.takeScreenshot().then(function(data){
                fs.writeFile("condition.png", data.replace(/^data:image\png;base64/,''), "base64", function(err){
                    if(err){
                        console.log("down fail");
                    }
                    console.log("down success");
                });
            })
        },1000);
    }).then(function(){
        driver.wait(function(){
            until.elementLocated(By.xpath('/html/frameset/frame[3]'))
        },10000);
        driver.switchTo().frame("frmbody");
    })
    .then(function(){
        driver.wait(until.elementLocated(By.id('memuBarText7')),5000);
        driver.findElement(By.id("memuBarText7")).click();
    }).then(function(){
        driver.wait(until.elementLocated(By.xpath('//*[@id="memuLinkDiv7"]/table/tbody/tr/td[2]/span')),5000);
        driver.findElement(By.xpath('//*[@id="memuLinkDiv7"]/table/tbody/tr/td[2]/span')).click();
    }).then(function(){
        driver.switchTo().frame('frmMain');
    }).then(function(){
        driver.wait(until.elementLocated(By.xpath('/html/body/form/table/tbody/tr[2]/td/table/tbody/tr[1]/td[3]/input[1]')),5000);
        driver.findElement(By.xpath('/html/body/form/table/tbody/tr[2]/td/table/tbody/tr[1]/td[3]/input[1]')).click();
    }).then(function(){
       driver.switchTo().frame('main');
    }).then(function(){
        //driver.quit();
        driver.wait(until.elementLocated(By.xpath('/html/body/center/div/div/img')),20000);
        driver.takeScreenshot()
            .then(function(data){
                fs.writeFile("score.png", data.replace(/^data:image\png;base64/,''), "base64", function(err){
                    if(err){
                        console.log("down fail");
                    }
                    console.log("down success");
                });
            }).then(function(){
                gm("score.png").crop(1000,600,280,210).write("scoreNumber.png",function(err){
                    if(err){
                        console.log(err);
                    }else{
                        console.log("down the scoreNumber successful");
                    }
                })
            })
    });
*/
