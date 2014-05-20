/* jshint node: true */

/*
 * expose
 */

module.exports = kare;


/*
 * kare
 *
 * @param {Function} fn
 * @return {Function}
 */

function kare(fn) {
  var curried = Array.prototype.slice.call(arguments, 1);

  return function() {
    var args = Array.prototype.slice.call(arguments);
    var i = 0;
    var len = curried.length;
    for(; i<len; i++) {
      if ('undefined' === typeof curried[i]) {
        curried[i] = args[0];
        args.shift();
      }
    }
    return fn.apply(this, curried.concat(args));
  };
}

