const squareCode = function(message) {
  let column = Math.ceil(Math.sqrt(message.replace(/ /g, '').length));
  let nospace = message.replace(/ /g, '');
  let j = 0;
  let out1 = [''];
  for (let i = 0; i < nospace.length; i++) {
    if ((i+1) %column === 0) {
      if (out1[j]) {
        out1[j] += nospace[i];
      } else {
        out1[j] = '';
        out1[j] += nospace[i];
      }
      j++;
    } else {
      if (out1[j]) {
        out1[j] += nospace[i];
      } else {
        out1[j] = '';
        out1[j] += nospace[i];
      }
    }
  }
  let out2 = [''];
  for (let k = 0; k < column; k++) {
    for (let out1a of out1) {
      if (out1a[k]) {
        if (out2[k]) {
          out2[k] += out1a[k];
        } else {
          out2[k] = '';
          out2[k] += out1a[k];
        }
      }
    }
  }
  let out3 = '';
  for (let out2a of out2) {
    out3 += out2a;
    out3 += ' ';
  }
  return out3;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));