/*
  Challenge Mentors

  Given the array of mentor of objects, follow each part of the exercise below
 */

var mentors = [
  {
    firstName: "Antonio",
    lastName: "Miranda",
    skills: ["JS","React","Node"],
    class: "Mar1",
    studentLikes: 0,
    job: {
        company: "Google",
        position: "Senior developer",
        city: "Barcelona"
    }
  },
  {
    firstName: "Leo",
    lastName: "Messi",
    skills: ["Play football"],
    class: "Mar3",
    studentLikes: 0,
    job: {
        company: "FC Barcelona",
        position: "Player",
        city: "Barcelona"
    }
  },
  {
    firstName: "John",
    lastName: "VanDamme",
    skills: ["React","Angular","Python","Node"],
    class: "Mar4",
    studentLikes: 0,
    job: {
        company: "Facebook",
        position: "Software Manager",
        city: "Chicago"
    }
  },  
  {
    firstName: "Giorgio",
    lastName: "Polvara",
    skills: ["HTML","JS","React"],
    class: "Mar2",
    studentLikes: 0,
    job: {
        company: "Amazon",
        position: "Senior developer",
        city: "Barcelona"
    }
  },
];

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/

/*
1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."
*/

// DO NOT EDIT THIS CODE
console.log("Part 1");
console.log("Expected result:");
console.log("Hi, my name is Antonio Miranda. I work in Barcelona and I know React.");
console.log("Hi, my name is Giorgio Polvara. I work in Barcelona and I know React.");
console.log("Actual result:");
//

// WRITE YOUR CODE HERE
//
//

// DO NOT EDIT THIS CODE
console.log();
//

/*
2. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push(), for example:
var animals = ["dog","cat"];
animals.push("horse"); //["dog","cat","horse"]
*/

// WRITE YOUR CODE HERE
//
//

// DO NOT EDIT THIS CODE
console.log("Part 2");
console.log("Expected result:\nJun1 SQL\nJun1 SQL\nJun1 SQL");
console.log("Actual result:");
for (var i = 0; i < mentors.length; i++) {
  var mentor = mentors[i];
  if (mentor.job.city === "Barcelona") {
    console.log(mentor.class, mentor.skills[mentor.skills.length - 1]);
  }
}
console.log();
//

/*
3. Create an object function with the name .addSkill() to be able to add skills from it
*/

// WRITE YOUR CODE HERE
//
//

// DO NOT EDIT THIS CODE
console.log("Part 3");
console.log("Expected result:\nHTML\nHTML\nHTML\nHTML");
console.log("Actual result:");
for (var i = 0; i < mentors.length; i++) {
  var mentor = mentors[i];
  if (mentor.addSkill) {
    mentor.addSkill("HTML");
  }
  console.log(mentor.skills[mentor.skills.length - 1]);
}
console.log();
//

/*
4. Create a function to add a skill to all members in a list of mentors
*/

// WRITE YOUR CODE HERE
function addSkill(mentors, skill) {
}
//

// DO NOT EDIT THIS CODE
console.log("Part 4");
console.log("Expected result:\nCSS\nCSS\nCSS\nCSS");
console.log("Actual result:");
addSkill(mentors, "CSS");
for (var i = 0; i < mentors.length; i++) {
  var mentor = mentors[i];
  console.log(mentor.skills[mentor.skills.length - 1]);
}
console.log();
//

/*
5. Create a function to remove a skill from all members in a list of mentors
Hint: first create an object function .removeSkill() as in part 3
*/

// WRITE YOUR CODE HERE
function removeSkill(mentors, skill) {
}
//

// DO NOT EDIT THIS CODE
console.log("Part 5");
console.log("Expected result:\nHTML\nHTML\nHTML\nHTML");
console.log("Actual result:");
removeSkill(mentors, "CSS");
for (var i = 0; i < mentors.length; i++) {
  var mentor = mentors[i];
  console.log(mentor.skills[mentor.skills.length - 1]);
}
console.log();
//

/*
6. Create a function that returns the name of the mentor with the most number of skills
*/

// WRITE YOUR CODE HERE
function getMentorNameWithMaxSkills() {
}

// DO NOT EDIT THIS CODE
console.log("Part 6");
console.log("Expected result: Antonio");
var mentorName = getMentorNameWithMaxSkills(mentors);
console.log("Actual result: " + mentorName);
console.log();
//

/*
7. Create the function .addStudentLikes() that increments by one the attribute studentLikes
*/

// WRITE YOUR CODE HERE
//
//

// DO NOT EDIT THIS CODE
console.log("Part 7");
console.log("Expected result:");
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log("Actual result:");
for (var i = 0; i < mentors.length; i++) {
  var mentor = mentors[i];
  if (mentor.studentLikes) {
    mentor.addStudentLikes();
  }
  console.log(mentor.studentLikes);
}
console.log();
//

/*
8. Create a function that adds a student like to all mentors in the array
*/

// WRITE YOUR CODE HERE
function addStudentLikes(mentors) {
}
//

// DO NOT EDIT THIS CODE
console.log("Part 8");
console.log("Expected result:");
console.log(2);
console.log(2);
console.log(2);
console.log(2);
console.log("Actual result:");
addStudentLikes(mentors);
for (var i = 0; i < mentors.length; i++) {
  var mentor = mentors[i];
  console.log(mentor.studentLikes);
}
//