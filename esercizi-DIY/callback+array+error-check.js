/*scrivere una funzione che accetta come parametro un array di animali e una callback che esegue un operazione sui parametri e restituisce tutti gli animali quadrupedi*/

const animals = [
  {
    name: "gatto",
    nZampe: 4,
  },
  {
    name: "cane",
    nZampe: 4,
  },
  {
    name: "pollo",
    nZampe: 2,
  },
  {
    name: "scimmia",
    nZampe: 2,
  },
  {
    name: "gatto",
    nZampe: 4,
  },
];

function animalFilter(array, callback) {
  if (typeof array === "object") {
    const one4PawedAnimal = array.find((animal) => {
      animal.nZampe === 4;
      return animal;
    });
    callback(null, one4PawedAnimal.name);
  } else {
    callback(new Error("The parameter is not an array"), null);
  }
}

function animalPrint(error, animalName) {
  if (animalName) {
    console.log(animalName);
  } else {
    console.log(error);
  }
}

animalFilter(animals, animalPrint);
