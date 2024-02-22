/*
Implementa la funzione asincrona "lanciaVeicoloSpaziale" che chiama in sequenza 
la funzione "caricaModulo" per caricare i moduli A, B e C, attendendo il completamento 
di ciascuna operazione prima di passare alla successiva.

Gestisci eventuali errori nel caricamento dei moduli stampando in console 
"Impossibile lanciare il veicolo spaziale a causa di errori nei moduli."

Alla fine, se tutti i moduli sono stati caricati con successo, stampa in 
console "Veicolo spaziale pronto per il lancio!".
*/

const moduloA = "A"
const moduloB = "B"
const moduloC = "C"

function caricaModulo(modulo) {
  return new Promise((resolve, reject) => {
    const tempoCaricamento = Math.random() * 3000; // Simula il caricamento con un ritardo casuale fino a 3 secondi.
    setTimeout(() => {
      if (tempoCaricamento < 1500) {
        resolve(`Il modulo ${modulo} è stato caricato.`);
      } else {
        reject(`Errore durante il caricamento del modulo ${modulo}.`);
      }
    }, tempoCaricamento);
  })
}

async function lanciaVeicoloSpaziale () {
    try {
        let caricaModuloA = await caricaModulo (moduloA)
        console.log(caricaModuloA)
        let caricaModuloB = await caricaModulo (moduloB)
        console.log(caricaModuloB)
        let caricaModuloC = await caricaModulo (moduloC)
        console.log(caricaModuloC)
        setTimeout(() => {
            console.log("Veicolo spaziale pronto per il lancio!")
        }, 500)
    } catch (error) {
        console.log(error)
    }
}

lanciaVeicoloSpaziale()