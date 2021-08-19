const calculateChange = function(total, cash) {
  let twenty = 0;
  let ten = 0;
  let five = 0;
  let two = 0;
  let one = 0;
  let quarter = 0;
  let dime = 0;
  let nickel = 0;
  let penny = 0;
  while (cash !== total) {
    if (cash - 2000 >= total) {
      twenty ++;
      cash -= 2000;
    } else if (cash - 1000 >= total) {
      ten ++;
      cash -= 1000;
    } else if (cash - 500 >= total) {
      five ++;
      cash -= 500;
    } else if (cash - 200 >= total) {
      two ++;
      cash -= 200;
    } else if (cash - 100 >= total) {
      one ++;
      cash -= 100;
    } else if (cash - 25 >= total) {
      quarter ++;
      cash -= 25;
    } else if (cash - 10 >= total) {
      dime ++;
      cash -= 10;
    } else if (cash - 5 >= total) {
      nickel ++;
      cash -= 5;
    } else if (cash - 1 >= total) {
      penny ++;
      cash -= 1;
    }
  }
let out = {};
if (twenty !== 0) {
  out.twentyDollar = twenty;
}
if (ten!== 0) {
  out.tenDollar = ten;
}
if (five !== 0) {
  out.fiveDollar = five;
}
if (two !== 0) {
  out.twoDollar = two;
}
if (one !== 0) {
  out.oneDollar = one;
}
if (quarter !== 0) {
  out.quarter = quarter;
}
if (dime !== 0) {
  out.dimeDollar = dime;
}
if (nickel !== 0) {
  out.nickelDollar = nickel;
}
if (penny !== 0) {
  out.penny = penny;
}
return out;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));