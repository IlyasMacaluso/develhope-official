// trasforma il costrutto if else in un operatore ternario

let number = 2;

if (number > 0) {
  console.log("The number is positive");
} else {
  console.log("The number is negative");
}

//mia soluzione (funziona)
console.log(number > 0 ? "The number is positive" : "the number is negative")

//soluzione corretta perché come in if else, 
//la condizione viene verificata all'inizio, 
//e dopo si effettua l'azione A o l'azione B
number > 0 ? console.log("The number is positive") : console.log("The number is negative")