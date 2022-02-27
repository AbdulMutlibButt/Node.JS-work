"use strict";

var req = require("request");

var url = "http://api.weatherstack.com/current?access_key=ba50f0841e3972445210dce550e03264&query=24.860735,67.001137";
req({
  url: url
}, function (error, response) {
  var data = JSON.parse(response.body);
  console.log(data.currently);
});