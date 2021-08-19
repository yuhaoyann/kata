const makeCase = function(input, case1) {
  let out = input;
  
  function camel (in1) {
    let out1 = "";
    for (let i = 0; i < in1.length; i++) {
      if (in1[i] === " ") {
        out1 += in1[i+1].toUpperCase();
        i++;
      } else {
        out1 += in1[i];
      }
    }
    return out1;
  }
  function pascal (in2) {
    let out1 = "";
    for (let i = 0; i < in2.length; i++) {
      if (i === 0) {
        out1 += in2[i].toUpperCase();
      } else if (in2[i] === " ") {
        out1 += in2[i+1].toUpperCase();
        i++;
      } else {
        out1 += in2[i];
      }
    }
    return out1;
  }
  function snake (in3) {
    let out1 = "";
    for (let i = 0; i < in3.length; i++) {
      if (in3[i] === " ") {
        out1 += '_';
      } else {
        out1 += in3[i];
      }
    }
    return out1;
  }
  function kebab (in4) {
    let out1 = "";
    for (let i = 0; i < in4.length; i++) {
      if (in4[i] === " ") {
        out1 += '-';
      } else {
        out1 += in4[i];
      }
    }
    return out1;
  }
  function title (in5) {
    let out1 = "";
    for (let i = 0; i < in5.length; i++) {
      if (i === 0) {
        out1 += in5[i].toUpperCase();
      } else if (in5[i] === " ") {
        out1 += in5[i];
        out1 += in5[i+1].toUpperCase();
        i++;
      } else {
        out1 += in5[i];
      }
    }
    return out1;
  }
  function vowel (in6) {
    let out1 = "";
    for (let i = 0; i < in6.length; i++) {
      if (in6[i] === 'a' || in6[i] === 'e' || in6[i] === 'i' || in6[i] === 'o' || in6[i] === 'u') {
        out1 += in6[i].toUpperCase();
      } else {
        out1 += in6[i];
      }
    }
    return out1;
  }
  function consonant (in7) {
    let out1 = "";
    for (let i = 0; i < in7.length; i++) {
      if (in7[i] !== 'a' && in7[i] !== 'e' && in7[i] !== 'i' && in7[i] !== 'o' && in7[i] !== 'u') {
        out1 += in7[i].toUpperCase();
      } else {
        out1 += in7[i];
      }
    }
    return out1;
  }
  function upper (in8) {
    let out1 = "";
    for (let i = 0; i < in8.length; i++) {
      out1 += in8[i].toUpperCase();
    }
    return out1;
  }
  function lower (in9) {
    let out1 = "";
    for (let i = 0; i < in9.length; i++) {
      out1 += in8[i].toLowerCase();
    }
    return out1;
  }

  if (case1.includes('camel')) {
    out = camel(out);
  }
  if (case1.includes('pascal')) {
    out = pascal(out);
  }
  if (case1.includes('snake')) {
    out = snake(out);
  }
  if (case1.includes('kebab')) {
    out = kebab(out);
  }
  if (case1.includes('title')) {
    out = title(out);
  }
  if (case1.includes('vowel')) {
    out = vowel(out);
  }
  if (case1.includes('consonant')) {
    out = consonant(out);
  }
  if (case1.includes('upper')) {
    out = upper(out);
  }
  if (case1.includes('lower')) {
    out = lower(out);
  }
  return out;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));