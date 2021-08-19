const camelCase = function(input) {
  let out = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      out += input[i+1].toUpperCase();
      i++;
    } else {
      out += input[i];
    }
  }
  return out;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));