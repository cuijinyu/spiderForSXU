var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().
                withCapabilities(webdriver.Capabilities.chrome()).
                build();
driver.get("http://bkjw.sxu.edu.cn/");
console.log(driver.findElement(webdriver.By.name("Logon")));
driver.quit();