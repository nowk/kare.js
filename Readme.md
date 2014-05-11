# Kare

Just an experiment in currying. Not to be confused with [Kara](http://en.wikipedia.org/wiki/Kara_(band).

# Install

    npm install kare

# Example

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

