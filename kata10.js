const multiplicationTable = function(maxValue) {
  let out = "";
  for (let i = 0; i < maxValue; i++) {
    for (let j = 0; j < maxValue; j++) {
      out += (i+1)*(j+1);
      out += " ";
    }
    out += "\n";
  }
  return out;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));