// Utilizza forEach per stampare i nomi degli studenti.
// Utilizza find per trovare uno studente con un voto superiore a 90.
// Utilizza reduce per calcolare la media dei voti degli studenti.
// Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
// Utilizza filter per trovare gli studenti con voti superiori a 85.

const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];

//forEach per stampare i nomi degli studenti
studenti.forEach(studente => console.log (studente.nome))

//trova il primo studente con voto > 90
const studenteModello = studenti.find (studente => studente.voto > 90)
//oppure
// function studenteModello () {
//     return studenti.find(studente => studente.voto > 90)
// }
//stampa per verificare il funzionamento
console.log(studenteModello);

//calcola la media dei voti degli studwnti
function votoMedio (studenti){
    const somma = studenti.reduce ((a, studente) => a + studente.voto, 0)
    const media = somma / studenti.length
    return media
}
//stampa per verificare
console.log(votoMedio(studenti))

//creiamo un array contenete i nomi degli studenti in maiuscolo
function allCapsNickname (studenti){
    let nickname = studenti.map(studente => studente.nome.toUpperCase())
    return nickname
}
//stampa per verifica
console.log(allCapsNickname(studenti))

//filter per trovare gli studenti con voto superiore a 85
function studentiModello(studenti) {
    return studenti.filter(studente => studente.voto > 85)
}
//oppure
// const studentiModello = (studenti) => {
//     return studenti.filter(studente => studente.voto > 85)
// } 
//stampa per verificare
console.log(studentiModello(studenti));