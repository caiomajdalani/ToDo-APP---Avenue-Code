'use strict';

var faker = require('faker');

class Helper {
    takeShot() {
    browser.sleep(1000);
    browser.takeScreenshot().then(function(png) {
      allure.createAttachment('Screenshot', function () {
        return new Buffer(png, 'base64')
      }, 'image/png')();
    })
  } 
}

module.exports = Helper;