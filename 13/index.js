/* 13. Факториал с мемоизацией (почитаешь про это =)) */

var fact = (function () {
  var memo = {};

  function f(n) {
    var value;

    if (n in memo) {
      value = memo[n];
    } else {
      if (n === 0 || n === 1)
        value = n;
      else
        value = n*f(n - 1);

      memo[n] = value;
    }

    return value;
  }

  return f;
})();
console.log(fact(3));