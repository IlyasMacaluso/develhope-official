const teamMembers = [
    {
      name: "Silas",
      surname: "Bonsu",
      age: 25,
      city: "Correggio",
      hobby: "atletica leggera",
      favoriteFood: "pizza",
      favoriteVideoGame: "Horizon zero down",
      favoriteFilm: "Star wars",
      favoriteBook: "Il signore degli anelli",
      petName: "Bethoven",
    },
    {
      name: "Andrea",
      surname: "Audisio",
      age: 34,
      city: "Cuneo",
      hobby: ["serie tv", "Videogiochi", "fotografia"],
      favoriteFood: "lasagne",
      favoriteVideoGame: "Minecraft",
      favoriteFilm: "Star Wars, canonico",
      favoriteBook: "ciclo delle fondazioni",
      petName: "Birba",
    },
    {
      name: "Alessandro",
      surname: "Canonico",
      age: 27,
      city: "Napoli",
      hobby: "mixing vinyls",
      favoriteFood: "Polpo alla luciana",
      favoriteVideoGame: "",
      favoriteFilm: "Non essere cattivo",
      favoriteBook: "",
      petName: "",
    },
    {
      name: "Ilyas",
      surname: "Macaluso",
      age: 26,
      city: "Palermo",
      hobby: ["Anime", "Manga", "Videogiochi"],
      favoriteFood: "Hamburger americano",
      favoriteVideoGame: "LOL",
      favoriteFilm: "Il signore degli anelli",
      favoriteBook: "Dalla terra alla luna",
      petName: ["Milo", "Luppolo"],
    },
  ]


  //funzione 6 stampa i nomi delle persone con lo stesso nome (cor array.some)

  let sameNamedPerson = []

  function sameName(array) {
    array.forEach(personA => {
        let sameNamedPersons = array.some (personB => personA.name === personB.name && personA !== personB)
        if (sameNamedPersons){
            sameNamedPerson.push(personA)
        }
    })
    if (sameNamedPerson.length != 0){
        return sameNamedPerson
    } else { 
        return "Non ci sono membri con lo stesso nome"  
    }
  }

console.log(sameName(teamMembers))