var request = require('request');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');

request({
  url:      'https://kawasaki.m.tmall.com/?spm=a220o.1000855.w5001-15670173131.8.VtPvDF&scene=taobao_shop',
  encoding: null
}, function (err, res, body) {
  if (err) throw err;

  body = iconv.decode(body, 'gbk');

  var $ = cheerio.load(body);

  console.log($('head title').text());
});
