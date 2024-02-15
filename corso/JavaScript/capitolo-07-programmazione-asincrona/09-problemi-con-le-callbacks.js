const users = [
  {
    id: 1,
    name: "Mario",
    surname: "Rossi",
    username: "mariorossi",
    password: "s3cr3t",
  },
  {
    id: 2,
    name: "Alessandro",
    surname: "Verdi",
    username: "aleverdi",
    password: "pr1v4t3",
  },
];

const friends = {
  1: [
    { id: 2, nome: "Luciano" },
    { id: 3, nome: "Giovanni" },
  ],
  2: [
    { id: 2, nome: "Marco" },
    { id: 3, nome: "Fabrizio" },
  ],
};

function login(username, password, callback) {
  setTimeout(() => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      //se esiste un utente con questo username e password ->
      callback(null, user);
    } else {
      callback("Invalid credentials!", null);
    }
  }, 1000);
}

function getFriends(id, callback) {
  //id dell'utente del quale vogliamo recuperare la lista di amici
  setTimeout(() => {
    const userFriends = friends[id]; //nuova costante che contiene gli elementi corrispondenti a quell'id nell'oggetto friends

    if (userFriends) {
      //se l'utente ha degli amici
      callback(null, userFriends);
    } else {
      callback("User with id ${id} has no friends :(", null);
    }
  }, 2000);
}

login("mariorossi", "s3cr3t", (error, data) => {
    if(error){
        console.log(error)
    } else {
        console.log("Logged in");
        getFriends (data.id, (error, data) => {
            if (error) {
                console.log(error)
            } else {
                console.log(data)
            }
        })
    }

})

/*Richiamare due funzioni a catena è già abbastanza complesso, soprattutto da rileggere,
e in uno scenario reale, ci sarebbero molte altre operazioni da potere eseguire oltre alle
due  che abbiamo visto, per questo motivo, codice di questo tipo, che concatena più callback 
è stato rinominato Pyramid of Doom.

A cause di queste problematiche, le callback non vengono utilizzate molto frequentemente
in JavaScript moderno, e sono state sostituite da un’altra funzionalità molto potente, 
le Promise.*/