//creare un programma che presi dei parametri, controlla che tutti siano delle
//stringhe, e se è così li converte in uppercase, se non è così, trasforma
//quei parametri in stringhe

/* Silas
function checkString(string) {
    return new Promise((resolve, reject) => {
        if (typeof string ) {
            resolve() 
            
        } else {
            reject()
        }
        
    })
    }
*/

//continuazione Ilyas
function checkString(...parameters) {
    return new Promise((resolve, reject) => {
        if (parameters.every((parameter) => typeof parameter === "string")) {
            resolve(parameters.map((parameter) => parameter.toUpperCase()))
        } else {
            reject(
                parameters.map((parameter) =>
                    parameter.toString().toUpperCase()
                )
            )
        }
    })
}

checkString("ciao", "come", "stai", true)
    .then((data) => {
        console.log("All parameters are string. converting to upper case...")
        setTimeout(() => {
            console.log(data)
        }, 1000)
    })
    .catch((error) => {
        console.log(
            "Some parameters are not string, converting all parameters to string..."
        )
        setTimeout(() => {
            console.log(error)
        }, 1000)
    })
