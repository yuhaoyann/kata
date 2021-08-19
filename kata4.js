const instructorWithLongestName = function(instructors) {
  let long = {name:"haha", course: "hehe"};
  for (let instructor of instructors) {
    if (instructor.name.length > long.name.length) {
      long = instructor;
    }
  }
  return long;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));