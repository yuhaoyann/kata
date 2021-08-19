const urlDecode = function(text) {
  out = {};
  let split = text.replace(/%20/g, ' ');
  let split1 = split.split('&');
  let split2 = split1.map( x => x.split('='));
  for (ss of split2) {
    out[ss[0]] = ss[1];
  }
  return out;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);