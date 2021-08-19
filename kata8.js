const repeatNumbers = function(data) {
  let out = "";
for (let i = 0; i < data.length; i++) {
  if (i !== data.length - 1) {
    for (let j = 0; j < data[i][1]; j++) {
      out += data[i][0];
    }
    out += ", "
  } else {
    for (let j = 0; j < data[i][1]; j++) {
      out += data[i][0];
    }
  }
}
return out;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));