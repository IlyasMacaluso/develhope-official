/* const data = document.querySelectorAll(".form-input")
const surname = data[1]
const age = data[2] */

const nameInput = document.querySelector("#firstName")
const surnameInput = document.querySelector("#lastName")
const ageInput = document.querySelector("#age")

const button = document.querySelector(".submit-data")
const form = document.querySelector("form")


function addPerson(pName, pSurname, pAge) {
    this.firstName = pName
    this.lastName = pSurname
    this.age = pAge
}

let name
let surname
let age

let getName = () => {
    name = nameInput.value
}
let getSurname = () => {
    surname = surnameInput.value
}
let getAge = () => {
    age = ageInput.value
}

nameInput.addEventListener("keyup" ,getName)

surnameInput.addEventListener("keyup", getSurname)

ageInput.addEventListener("keyup", getAge)


button.addEventListener("mouseover", () => {
    let person = new addPerson(name,surname, age)
    jsonPerson = JSON.stringify(person)
    form.setAttribute(`data-person`, `${jsonPerson}`)
    console.log(form);

})   
