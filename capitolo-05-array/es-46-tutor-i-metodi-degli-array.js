/*Partendo dall'array names, come possiamo stampare tutti
 i nomi contenuti al suo interno separandoli con un trattino?*/

const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

/*possiamo utilizzare il metodo JOIN per creare un'unica stringa 
contenente tutti gli elementi dell'array*/

let allNames = names.join("-")

console.log(allNames)

/*possiamo anche eseguire il join all'interno del console.log*/

console.log(names.join("_"))