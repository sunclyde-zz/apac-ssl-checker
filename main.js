var sslChecker = require("ssl-checker")
sslChecker('www.lancome.jp').then(result => console.info(result));