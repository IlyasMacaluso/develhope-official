/*
Make a function called studentLevels(students) that returns an array that looks like this: ["Failed", "Average", "Above Average", "Great"], 
where each string is decided if their grade is: 5 - > Failed 6 -> Average 7 - 8 -> Above Average 9 - 10 -> Great.

Make a function called failedStudents that returns all students that failed, with a grade less than 5.
*/

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let studentsArr = [
  { name: "John" },
  { name: "Jack" },
  { name: "Mary" },
  { name: "Ginny" },
  { name: "Harry" },
]

function exam(students) {
  students.forEach((el) => {
    let v = getRandomNumber(1, 10);
    el.grade = v;
  });
}

let studentAwasomeness = []

function studentsLevels (students) {
    students.map(student => {
        if (student.grade <= 5){
            studentAwasomeness.push("Failed")
        } else if (student.grade <= 6){
            studentAwasomeness.push("Average")
        } else if (student.grade <= 8){
            studentAwasomeness.push("Above average")
        } else if (student.grade <= 10){
            studentAwasomeness.push("Great")
        } 
    })
}

function failedStudents (students) {
    //con filter crea un nuovo array in cui inserisce solo gli elementi che soddisfano la condizione
    return students.filter((student) => student.grade <= 5) 
       //map modifica l'array esistente e quindi restituisce undefined quando la condizione non è soddisfatta 
//     return students.map(student => { 
//         if (student.grade <= 5) {
//             return student
//         } 
//     })
}

exam(studentsArr)

studentsLevels(studentsArr)

console.log(studentAwasomeness)

console.log ("ciao", failedStudents (studentsArr))