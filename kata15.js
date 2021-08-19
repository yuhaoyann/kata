const organizeInstructors = function(instructors) {
  let out = {};
  for (instructor of instructors) {
    if (out[instructor.course]) {
      out[instructor.course].push(instructor.name);
    } else {
      out[instructor.course] = [];
      out[instructor.course].push(instructor.name);
    }
  }
  return out;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));