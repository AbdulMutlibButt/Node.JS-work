"use strict";

var geocode = function geocode(a, b, callback) {
  setTimeout(function () {
    var sum = a + b;
    callback(sum);
  }, 2000);
};

geocode(1, 9, function (sum) {
  console.log(sum);
});