//risposta mia

let name
let surname = 'Rossi'

let fullname = name + " " +  surname

if(Boolean(name) == true && Boolean(surname) == true){
    console.log(fullname)
} else {
    console.log("fullname is invalid")
}

// pensavo si dovessero utilizzare gli operatori di controllo per verificare se name e surname fossero trhuthy
// -> ho convertito name e surname con Boolean e li ho confrontati con il valore booleano true
// funziona comunque correttamente