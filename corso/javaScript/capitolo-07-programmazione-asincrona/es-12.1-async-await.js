/* 
La funzione caricamentoDati simula il caricamento di dati 
asincroni con un ritardo di 2 secondi!

Implementa la funzione ottieniDati utilizzando await per attendere il caricamento dei dati, 
quindi visualizza i dati ottenuti in console. 
*/ 

function caricamentoDati() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Questi sono i dati ottenuti dalla fonte asincrona.");
    }, 2000);
  });
}

async function ottieniDati () {
    try {
        const dati = await caricamentoDati()
        console.log(dati)
    } catch (error) {
        console.log(error)        
    }
}
//il try catch in questo caso è superfluo perchè non abbiamo implementato reject
//all'interno della promise 

ottieniDati()

// ipmlementa la funzione asincrona "ottieniDati"