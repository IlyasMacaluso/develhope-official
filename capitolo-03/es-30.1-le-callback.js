function sayHelloName (callback){
    if (typeof callback() === "string") {
        let name = callback ()
        console.log("Hello, " + name)
    } else {
        console.log("make sure the callback function return a string")
    }
}

function printName(){
    return "Ilyas"
}

setTimeout(() => {sayHelloName(printName)}, 2000)

//setTimeout impostato al di fuori della funzione sayHelloName 
//tramite arrow function