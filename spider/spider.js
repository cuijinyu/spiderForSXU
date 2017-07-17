require('chromedriver');
var index=require('../routes/index');
const {Builder,Browser,By,until,controlFlow} = require('selenium-webdriver');
const fs=require('fs');
const readline=require("readline");
const gm=require("gm");
var wait=require('wait-promise');
    var driver = new Builder()
    	.forBrowser('chrome')
    	.build();
//var imageMagick = gm.subClass({ imageMagick: true });
var rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
var startSpider=function () {
    this.getCheckNumber=function () {
        driver.get("http://bkjw.sxu.edu.cn/")
            .then(function(){
                driver.switchTo().frame(0);
            })
            .then(function(){
                // console.log(driver.getPageSource().then(function(data){
                //    console.log(data);
                //  }));
                driver.findElement(By.id("txt_sdertfgsadscxcadsads")).click();
                // console.log(checkImg);
                /*fs.writeFile("check.png",checkImg,'binary',function(err)
                 {
                 if(err)
                 {
                 console.log(err);
                 }else
                 {
                 console.log("successful");
                 }
                 })*/
                //var id=driver.findElement(By.id("txt_asmcdefsddsd"));
                //var pass=driver.findElement(By.id("txt_pewerwedsdfsdff"));
                //console.log(driver.text());
                driver.takeScreenshot()
                    .then(function(data){
                        fs.writeFile("./public/images/check.png", data.replace(/^data:image\png;base64/,''), "base64", function(err){
                            if(err){
                                console.log("down fail");
                            }
                            console.log("down success");
                        });
                    }).then(function(){
                    gm("./public/images/check.png").crop(100,25,190,350).write("./public/images/checkNumber.png",function(err)
                    {
                        if(err){
                            console.log(err);
                        }else
                        {
                            console.log("write successful");
                        }
                    });
                })
            });
    }
    this.login=function (id,password,checkNumber,callback) {
        //console.log(index.message);
        var check=driver.controlFlow().promise(resolve => resolve());
        check.then(function(){
        driver.findElement(By.id("txt_asmcdefsddsd")).sendKeys(id);
        driver.findElement(By.id("txt_pewerwedsdfsdff")).sendKeys(password);
        driver.findElement(By.id("txt_sdertfgsadscxcadsads")).sendKeys(checkNumber);
        }) .then(function(){
        console.log("successful");
        driver.findElement(By.xpath('//*[@id="Logon"]/table/tbody/tr[2]/td/table/tbody/tr[5]/td/input[1]')).click();
        setTimeout(function () {
            driver.takeScreenshot().then(function (data) {
                fs.writeFile("./public/images/condition.png", data.replace(/^data:image\png;base64/, ''), "base64", function (err) {
                    if (err) {
                        console.log("down fail");
                    }
                    console.log("down success");
                });
            })
        }, 1000);
          }).then(function(){
                driver.sleep(3000);
                driver.switchTo().frame("frmbody");
         })
             .then(function(){
        driver.wait(until.elementLocated(By.id('memuBarText7')), 5000);
        driver.findElement(By.id("memuBarText7")).click();
            }).then(function(){
        driver.wait(until.elementLocated(By.xpath('//*[@id="memuLinkDiv7"]/table/tbody/tr/td[2]/span')), 5000);
        driver.findElement(By.xpath('//*[@id="memuLinkDiv7"]/table/tbody/tr/td[2]/span')).click();
            }).then(function(){
        driver.switchTo().frame('frmMain');
           }).then(function(){
        driver.wait(until.elementLocated(By.xpath('/html/body/form/table/tbody/tr[2]/td/table/tbody/tr[1]/td[3]/input[1]')), 5000);
        driver.findElement(By.xpath('/html/body/form/table/tbody/tr[2]/td/table/tbody/tr[1]/td[3]/input[1]')).click();
            }).then(function(){
        driver.switchTo().frame('main');
           }).then(function(){
        //driver.quit();
        driver.wait(until.elementLocated(By.xpath('/html/body/center/div/div/img')), 20000);
        driver.takeScreenshot()
            .then(function (data) {
                fs.writeFile("./public/images/score.png", data.replace(/^data:image\png;base64/, ''), "base64", function (err) {
                    if (err) {
                        console.log("down fail");
                    }
                    console.log("down success");
                });
            }).then(function () {
            gm("./public/images/score.png").crop(1000, 600, 280, 210).write("./public/images/scoreNumber.png", function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("down the scoreNumber successful");
                }
            })
        }).then(function(){
            callback();
            driver.quit();
        })
        })
         .catch()
           {
           		driver.quit();
           }

    }
}
module.exports = startSpider;
