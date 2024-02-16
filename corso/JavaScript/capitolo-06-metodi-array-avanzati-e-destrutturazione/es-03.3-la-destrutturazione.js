const colors = ["red", "green", "blue"];

//il nome della variabile è arbitrario, importa l'ordine con cui vengono definite
const [firstColor, secondColor, thirdColor] = colors
//assegnamo ad ogni elemento dell'array un nome -> [firstColor = "red", secondColor = "green", thirdColor = "blue"]

console.log(`
    - ${firstColor}
    - ${secondColor}
    - ${thirdColor}
    `)