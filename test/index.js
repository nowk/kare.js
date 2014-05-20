/* jshint node: true */

var assert = require('chai').assert;
var kare = require('..');


describe('kare', function() {
  it("can curry", function() {
    function add(a, b) {
      return a + b;
    }

    var add10 = kare(add, 10);
    assert.equal(add10(10), 20);


    function addthensub(a, b, c) {
      return c + a - b;
    }

    var add10minus5 = kare(addthensub, 10, 5);
    assert.equal(add10minus5(20), 25);
  });

  it("can do this...", function() {
    var callback = kare(fn, undefined, undefined, 10, undefined, 5);

    function fn(cb, a, b, c, d, e, f) {
      cb(a, b, c, d, e, f);
    }

    callback(function(a, b, c, d, e, f) {
      assert.equal(a+b+c+d+e+f, 1+2+10+3+5+4);
    }, 1, 2, 3, 4);
  });
});

