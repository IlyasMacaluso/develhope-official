//Make a function called exam(students) which will go through 
//all the students, and give them a random grade from 

const teamMembers = [
    {
      name: "Silas",
    },
    {
      name: "Andrea",
    },
    {
      name: "Alessandro",
    },
    {
      name: "Ilyas",
    },
  ]

function exam(array) {
    return array.map(student => {
        student.grade = Math.floor(Math.random() * 10) + 1
        return student
    })
}

console.log(exam(teamMembers))