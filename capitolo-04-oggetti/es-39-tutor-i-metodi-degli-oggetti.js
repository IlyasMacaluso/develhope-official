const smartphone = {
    brand: "Apple",
    name: "Iphone 13",
    price: 1300,
  };

Object.freeze(smartphone) 
//non permette la modifica dei valori all'interno dell'oggetto smartphone

smartphone.price = 100;

console.log(smartphone);