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
      petName: "",
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
      petName: "",
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
      petName: "",
    },
  ]


//Funzione 4: Print who has a pet (name petName).

function hasPet (array) {
    const petOwners = array.filter(member => member.petName != "")
    if (petOwners.length > 0) {
      console.log(petOwners)
    } else {
      console.log("No team members owns a pet");
    }
}
hasPet(teamMembers)