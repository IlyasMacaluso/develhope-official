const students = [
    { id: 1, name: "Luca", surname: "Rossi", age: 16, hobby: 'gamer'},
    { id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: 'sportsman'},
    { id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: 'gamer'},
    { id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: 'photographer'},
    ];


function printStudentMotto () { 
    let longestSurname = students[0].surname
    let youngestStudent = students[0].name
    
    for (let i = 0; i < students.length; i++) {

        console.log (students[i].name)

        switch (students[i].hobby){
            case "gamer":
                console.log("Life Is a Game, Play to Win!")
                break

            case "sportsman":
                console.log("Never give up")
                break

            case "photographer":
                console.log("A picture is worth a thousand words!")
                break

            default:
                console.log(`${students[i].name} doesn't have a hobby`)
                break
        }

        if (students[i].surname.length > longestSurname.length){
            longestSurname = students[i].surname
        }

        if (students[i].age < youngestStudent.age){
            youngestStudent = students[i].age
        }
        console.log("Il cognome più lungo è", longestSurname)
        console.log("Lo studente più giovane è", youngestStudent)
    }
}

/* function WhoHasLongestSurname (students) {
    let longestSurname = "0"

    for (let i = 0; i < students.length; i++) {
        let surnameLength = longestSurname.length
        let currentSurname = students[i].surname

        if (currentSurname.length > surnameLength) {
            surnameLength = currentSurname.length
            longestSurname = currentSurname
        }
    } 
return console.log("Il cognome più lungo è", longestSurname)
}

function WhoIsYounger (students) {
    let youngestStudent = 99
    let youngestStudent 

    for (let i = 0; i < students.length; i++) {
        let currentAge = students[i].age

        if (currentAge < youngestStudent) {
            youngestStudent = currentAge
            youngestStudent = students[i].name
        }
    } 
return console.log("Lo studente più giovne è", youngestStudent)
}

let giovanna = Object.assign({}, students[2])
let carmelo = Object.assign({}, students[3])

students.pop()
students.pop()

students.push({ id: 5, name: "Elena", surname: "Pappalardo", age: 23, hobby: 'photographer'})
students.push(giovanna)
students.push(carmelo)

function printAll(callback1, callback2, callback3){
    callback1(students)
    callback2(students)
    callback3(students)
}

printAll(printStudentMotto, WhoHasLongestSurname, WhoIsYounger) */

printStudentMotto()