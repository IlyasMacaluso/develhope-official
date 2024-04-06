/*12- Dati due array di stringhe collegati in modo posizionale (paralleli),
uno contenente i nomi e l’altro i cognomi, stampare a video “Nome
Cognome”
Esempio:
nomi = [“Stefan”, “Tommy”, “James”]
cognomi = [“Mihalache”, “Shelby”, “Ford”]
l’output sarà:Stefan Mihalache
Tommy Shelby
James Ford */
let names = ["Ilyas", "Alessandro", "Andrea"]
let surnames = ["Macaluso", "Canonico", "Audisio"]

for (i = 0; i<names.length; i++){
    console.log(names[i], surnames[i]);
}