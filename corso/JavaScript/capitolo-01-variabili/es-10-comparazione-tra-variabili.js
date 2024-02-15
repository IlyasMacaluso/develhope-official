//Spiega la differenza tra:

const firstYearCompleted = true;
const yearsCompleted = 1;

yearsCompleted == firstYearCompleted //true perchè 1 può essere convertito in true e viceversa
yearsCompleted === firstYearCompleted //falso perchè pur essendo riconducibili i valori sono di tipo diverso (non identici)

console.log(yearsCompleted == firstYearCompleted)
console.log(yearsCompleted === firstYearCompleted)