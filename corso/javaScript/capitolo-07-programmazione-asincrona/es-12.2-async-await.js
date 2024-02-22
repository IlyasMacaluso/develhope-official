/*In questo esercizio andremo a simulare il caricamento di moduli di un veicolo 
spaziale in modo asincrono e quindi lanciare il veicolo spaziale quando tutti 
i moduli sono stati caricati con successo!

La funzione "caricaModulo" ritorna una promise simulando il caricamento di un modulo 
con un ritardo di 2 secondi!

Implementa la funzione asincrona "lanciaVeicoloSpaziale" che chiama in sequenza la 
funzione "caricaModulo" per caricare i moduli A, B e C, attendendo il completamento 
di ciascuna operazione prima di passare alla successiva.

Alla fine, quando tutti i moduli sono stati caricati con successo, stampa in console 
"Veicolo spaziale pronto per il lancio!".
*/

const moduloA = "A"
const moduloB = "B"
const moduloC = "C"

function caricaModulo(modulo) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
        if (modulo === moduloA || modulo === moduloB || modulo === moduloC) {
            resolve(`Il modulo ${modulo} è stato caricato.`)
        } else {
            reject ('Erroe: tentato caricamento di un modulo non registrato')
        }

    }, 2000)
  })
}

async function lanciaVeicoloSpaziale () {
    try {
        let caricaModuloA = await caricaModulo (moduloA)
        console.log(caricaModuloA)
        let caricaModuloB = await caricaModulo (moduloB)
        console.log(caricaModuloB)
        //errore per 
        let caricaModuloC = await caricaModulo (moduloC)
        console.log(caricaModuloC)
        setTimeout(() => {
            console.log("Veicolo spaziale pronto per il lancio!")
        }, 500)
    } catch (error) {
        //ho aggiunto un reject e un messaggio di errore per testare il funzionamento
        console.log(error)
    }
}

lanciaVeicoloSpaziale()
// implementa la funzione asincrona "lanciaVeicoloSpaziale"