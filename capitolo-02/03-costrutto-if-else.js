//quando vogliamo eseguire delle logiche piuttosto che altre, in base a quali condizioni si verificano

let isRaining = true
let isCloudy = true

//ci permette di creare un bivio. Se la condizione si verifica esegue il blocco A, in caso contrario esegue il blocco B (else)
//tra le parentesi tonde si trova la condizione da verificare

if(isRaining == false){
    console.log("I should take an umbrella") //questo blocco viene eseguito se la condizione viene verificata
} else {
    console.log("it's a sunny day") //questo blocco viene eseguito se la condizione non viene verificata
}

console.log("if else: done") //tutto ciò che si trova al di fuori delle {} viene eseguito in ogni caso successivamente

//possiamo anche inserire ulteriori condizioni dopo il primo if, ad esempio

if(isRaining == false){
    console.log("I should take an umbrella") //questo blocco {} viene eseguito se la condizione viene verificata
} else if (isCloudy = true) {
    console.log("i could take an umbrella") //questo blocco {} viene eseguito se tutte le condizioni prima di questa non sono verificate
} else {
    console.log("it's a sunny day") //questo blocco {} viene eseguito se ttte le condizioni non vengono verificate
}

console.log("if else , else if: done") 

//se condizioni all'interno di if () possono essere anche molto complesse 
//ad esempio if(isRaining && 1 === 1 && 2 > 0) o intere espressioni di calcolo

//solo un blocco di codice alla volta verrà eseguito (a seconda della condizione verificata in quel momento)
//se si verifica la condizione 1, tutte le successive condizioni saranno saltate e si uscirà dal blocco if else, else if (non considerando gli annidamenti)