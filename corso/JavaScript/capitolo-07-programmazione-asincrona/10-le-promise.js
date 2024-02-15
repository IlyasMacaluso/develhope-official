function checkAge(age){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve("Ok")
            } else { 
                reject("Not ok")
            }
        }, 1000)
    })
}
    
const check = checkAge(16)
.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})

