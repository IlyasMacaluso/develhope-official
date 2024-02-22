let user = {
    name: "Cosimo",
    age: 30,
  };
  
  let newUser = Object.assign({}, user) 
  //effettua una copia dei valori di user all'interno dell'oggetto newUser

  newUser.name = "Paolo";
  
  console.log(newUser);
  console.log(user);