
function Student(fullName, age, course, group, team) {
    this.fullName = fullName
    this.age = age
    this.course = course
    this.group = group
    this.team = team
}

function LiveCodeDate(group, firstDate, secondDate) {
    this.group = group
    this.firstDate = firstDate
    this.secondDate = secondDate
}

function TeamProjectDates(team, date) {
    this.team = team
    this.date = date
}

let students = [
    new Student("Ilyas Macaluso", 26, "fullstack", "B", "B")
]

let liveCodeDates = [
    new LiveCodeDate("B", "Martedì 11:00-12:00", "Venerdì 15:00-16:30")
]

let teamProjectDates = [
    new TeamProjectDates("B", "Martedì 15:30-16:10")
]

function getStudentDate(studentName) {
    let targetStudent = students.filter(student => student.fullName == studentName)[0]
    let codingDates = liveCodeDates.filter(liveCodeDate => liveCodeDate.group == targetStudent.group)
    let projectDates = teamProjectDates.filter(teamProjectDate => teamProjectDate.team == targetStudent.group)

    console.log(`${studentName} (Group ${targetStudent.group}), (Team ${targetStudent.team}):`)

    codingDates.forEach( liveCodeDate => {
        console.log(`Live coding: ${liveCodeDate.firstDate}, ${liveCodeDate.secondDate}`)
    })

    projectDates.forEach( teamProjectDate => {
        console.log(`Team project: ${teamProjectDate.date}`)
    })
}

getStudentDate("Ilyas Macaluso")
