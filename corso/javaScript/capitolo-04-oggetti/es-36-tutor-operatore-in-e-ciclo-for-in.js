let car = {
    name: "Mercedes",
    color: "Grey",
}

for (let ikey in car){
    console.log(ikey)
}

//stampiamo il contenuto OLTRE alle chiavi

for (let ikey in car){
    console.log(`${ikey}:`, car[ikey])
}