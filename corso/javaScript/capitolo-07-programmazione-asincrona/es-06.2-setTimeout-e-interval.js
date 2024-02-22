// Crea una funzione chiamata "contoAllaRovescia" che diminuirà il conto alla rovescia di 1 unità e visualizzerà il tempo rimanente in console.
// Utilizza setInterval per chiamare la funzione contoAllaRovescia ogni secondo.
// Visualizza il messaggio "Conto alla rovescia in corso..." all'inizio.
// Quando il conto alla rovescia raggiunge 0, visualizza un messaggio che indica che il conto alla rovescia è terminato.

// let tempoRimanente = 10

// function contoAllaRovescia() {
//   const id = setInterval(() => {
//     if (tempoRimanente >= 0) {
//       console.log(`Countdown will self distruct in ${tempoRimanente}`);
//       tempoRimanente--
//     } else {
//       console.log(`!!Countdown self destruction completed!!`)
//       clearInterval(id)
//     }
//   }, 1000)
// }

// contoAllaRovescia()

//oppure

let tempoRimanente2 = 10

function anotherContoAllaRovescia() {
    console.log(`Countdown will self distruct in ${tempoRimanente2}`)
    tempoRimanente2--
}

const id = setInterval(anotherContoAllaRovescia, 1000)

setTimeout(() => {
  console.log("!!Countdown self destruction complete!!")
  clearInterval(id)
}, 11000)


anotherContoAllaRovescia()