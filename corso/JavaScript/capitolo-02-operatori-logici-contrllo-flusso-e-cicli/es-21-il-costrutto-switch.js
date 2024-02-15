//Crea, tramite costrutto switch, un controllo che stampi in console il prezzo di una camera d'albergo in base alle seguenti tariffe:

let Tariffa = "BB" // 50€

switch (Tariffa){
    case "BB":
         console.log("Il prezzo della camera è 50€")
    break

    case "HB":
        console.log("Il prezzo della camera è 80€")
    break

    case "FB":
        console.log("Il prezzo della camera è 100€")
    break

    default:
        console.log("La tariffa scelta non è valida")
    break

}