var casper = require('casper').create({
    timeout: 100000
});
var meteorUrl = "http://bkjw.sxu.edu.cn/_data/login.aspx";
var userAgentString = 'Mozilla/5.0 (Macintosh; Intel Mac OS X)';
casper.start(meteorUrl)
	.then(function(){
		this.captureSelector('check.png','#imgCode');
	})
	.then(function(){
		this.fill('form#Logon',{
			'txt_asmcdefsddsd':'201601001043',
			'txt_pewerwedsdfsdff':'dfetertre',
			'txt_sdertfgsadscxcadsads':'null'
		})
	})
	.then(function(){
		this.click('input.btnlogin');
	});
casper.userAgent(userAgentString);
casper.run();