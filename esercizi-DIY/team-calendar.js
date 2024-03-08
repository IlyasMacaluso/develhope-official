/*create a calendar that returns the days and hours for live codings
and team project activities given a student and for all students */
let students = [
    {
        fullName: "Letterio Briguglio",
        age: 23,
        course: "fullstack",
        group: "A",
        team: "A",
    }, 
    {
        fullName: "Ilyas Macaluso",
        age: 26,
        course: "fullstack",
        group: "B",
        team: "B",
    }, 
    {
        fullName: "Francesco Damatria",
        age: 28,
        course: "fullstack",
        group: "C",
        team: "C",
    }, 
]

let liveCodeDates = [
    {
        group: "A",
        firstDate: "Lunedi 11:00-12:00",
        secondDate: "Martedì 15:00-16:30",
    },
    {
        group: "B",
        firstDate: "Martedì 11:00-12:00",
        secondDate: "Venerdì 15:00-16:30",
    },
    {
        group: "C",
        firstDate: "Lunedi 15:00-16:30",
        secondDate: "Venerdì 11:00-12:00",
    },
]

let teamProjectDates = [
    {
        team: "a",
        date: "Martedì 11:30-12:10",
    },
    {
        team: "b",
        date: "Martedì 15:30-16:10",
    },
    {
        team: "c",
        date: "Mercoledì 14:00-14:40",
    },
]

function MyDates (student){
    for (i = 0; i < students.length; i++){
        if (student == students[i].fullName){
            console.log(`${student} (Group ${students[i].group}), (Team ${students[i].team}):`)
            switch (students[i].group) {
                case "A":
                    console.log(`Live coding: ${liveCodeDates[0].firstDate}, ${liveCodeDates[0].secondDate}`)
                    break

                 case "B":
                    console.log(`Live coding: ${liveCodeDates[1].firstDate}, ${liveCodeDates[1].secondDate}`)
                    break
                
                 case "C":
                    console.log(`Live coding: ${liveCodeDates[2].firstDate}, ${liveCodeDates[2].secondDate}`)
                    break
                
                default:
                    console.log("Something went wrong, pleaase try again")
                    break
            }
            switch (students[i].team) {
                case "A":
                    console.log(`Team project: ${teamProjectDates[0].date}`)
                    break

                 case "B":
                    console.log(`Team project: ${teamProjectDates[1].date}`)
                    break
                
                 case "C":
                    console.log(`Team project: ${teamProjectDates[2].date}`)
                    break
                
                default:
                    console.log("Something went wrong, pleaase try again")
                    break
            }
        }
    }
}
    
function GroupDate (group) {
    switch (group){
        case ("A"):
            console.log (`Team A live coding dates are: ${liveCodeDates[0].firstDate}, ${liveCodeDates[0].secondDate}`)    
            break
        case ("B"):
            console.log (`Team B live coding dates are: ${liveCodeDates[1].firstDate}, ${liveCodeDates[1].secondDate}`)    
            break
        case ("C"):
            console.log (`Team C live coding dates are: ${liveCodeDates[2].firstDate}, ${liveCodeDates[2].secondDate}`)    
            break
    }
}

function TeamDates (team) {
    switch (team){
        case ("A"):
            console.log (`Team A project activities are: ${teamProjectDates[0].date}`)    
            break
        case ("B"):
            console.log (`Team B project activities are: ${teamProjectDates[1].date}`)    
            break
        case ("C"):
            console.log (`Team C project activities are: ${teamProjectDates[2].date}`)    
            break
    }
}

MyDates("Ilyas Macaluso")
