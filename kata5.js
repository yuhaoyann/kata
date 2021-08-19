const urlEncode = function(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (i === 0 && text[i] === " ") {
      result = result;
      } else if (i === text.length - 1 && text[i] === " ") {
        result = result;
      } else {
      if (text[i] === " ") {
        result += "%20";
      } else {
        result += text[i];
      }
    } 
  }
  return result;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));