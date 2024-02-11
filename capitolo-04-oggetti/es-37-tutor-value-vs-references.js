let user = {
    name: "Cosimo",
    age: 30,
  };
  
  //possiamo utilizzare il ciclo for...in per copiare uno per uno
  //gli elementi oresenti in user (chiave-valore) in newUser
  let newUser = {};
  for (key in user) {
    newUser[key] = user[key]
    //inizializza l'elemento newUser.key (non esisteva in precedenza)
    //e associa alla chiave "key" il valore corrispondente
  }

  //user e newUser sono adesso due oggetti separati
  
  newUser.name = "Ilyas";
  newUser.age = 26;
  
  console.log(newUser);
  console.log(user);