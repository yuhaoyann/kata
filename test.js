var reverse = function(x) {
  let out = 0;
  if ( x === 0) {
      return 0;
  } else {
    while (x !== 0) {
      let yu = x%10;
      out = out * 10 + yu;
      x = (x - x%10)/10;
    }
    if (out > 2 ** 31 -1 || out < -(2**31)) {
      return 0;
    } else {
      return out;
    }
  }
}
console.log(reverse(1600))