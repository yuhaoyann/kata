const sumLargestNumbers = function(data) {
  let two = [0,0];
  for (let i = 0; i <= data.length; i++) {
    if (data[i] > two[0]) {
      if (data[i] > two[1]) {
        two[0] = two[1];
        two[1] = data[i];
      } else {
        two[0] = data[i];
      }
    } 
  }
  return two[0] + two[1];
  // Put your solution here
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));