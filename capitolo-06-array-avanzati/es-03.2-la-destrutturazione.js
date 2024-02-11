const student = {
    info: { name: "Bob", age: 25 },
    grades: { math: 95, science: 89 }
  };

//sintassi corretta (voti in un unico nuovo oggetto). Assegnamo un nuovo nome a cianscuna variabile
const {info:{name: nome, age: età}, grades: voti} = student

//sintassi meno corretta
//const {name: nome, age: età} = student.info
//const {grades: voto} = student

  console.log (nome, età, voti)