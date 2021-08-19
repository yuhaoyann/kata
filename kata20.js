const blocksAway = function(directions) {
  let head = 0;
  let y = 0;
  let x = 0;
  if (directions[0] === 'left') {
    head = 0;
  } else if (directions[0] = 'right') {
    head = 1;
  }
  for (let i = 1; i < directions.length; i++) {
    if (directions[i] === 'left') {
      if (head - 1 < -3) {
        head = 0;
      } else {
        head--;
      }
    } else if (directions[i] === 'right') {
      if (head + 1 > 3) {
        head = 0;
      } else {
        head++;
      }
    } else {
      if (head === 0) {
        y += directions[i];
      } else if (head === 1 || head === -3) {
        x += directions[i];
      } else if (head === 2 || head === -2) {
        y -= directions[i];
      } else if (head === 3 || head === -1) {
        x -= directions[i];
      }
    }
  }
  let out = {};
  out.east = x;
  out.north = y;
  return out;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));