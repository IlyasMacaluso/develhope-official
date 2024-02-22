// Utilizza il metodo forEach che prende un array di nomi di frutta e li stampa 
// aggiungendo un punto esclamativo a ciascun nome di frutta.

const fruits = ["Mela", "Banana", "Kiwi", "Fragola"];

//direttamente ocn il console log
fruits.forEach(element => {
    console.log(element + "!")
})

//concatenando il "!" e stampando successivamente
fruits.forEach(element => {
    element = element + "!"
    console.log(element)
})

