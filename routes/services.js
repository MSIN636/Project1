var express = require('express');
var router = express.Router();
var fs=require('fs');
var filedata;
fs.readFile("json/services.json","utf8", function(err,data){
  if(err)throw err;
  else {
    filedata=JSON.parse(data)
  }
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('services', {
    title: 'Services',
    services:filedata
  });
});

module.exports = router;
