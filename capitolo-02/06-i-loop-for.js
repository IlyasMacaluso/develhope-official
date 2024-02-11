//(i = 0) = iteratore. Valore su cui viene effettuato il controllo della condizione
//(i < 10) = condizione per cui il loop {} viene eseguito
//(i++) = codice che aggiorna il valore di "i" alla fine di ogni ciclo

for (let i = 0; i < 10; i++){
    console.log(i)
}

//questo ciclo for stamperà il valore all'interno di "i" ogni ciclo,
//fin quando (i < 10), ovvero stamperà i numeri da 0 a 9;

//(i++) è equivalente a (i = i + 1) ma è più compatto e veloce da scrivere

//supponiamo di volere eseguire la somma di tutti i valori che i assume (da 0 a 9)

let total = 0 //variabile su cui andremo a sommare (in modo cumulativo) il valore di "i"

for (let i = 0; i < 10; i++){
    total = total + i
}
console.log(total)

//si usa per iterare su una lista di valori