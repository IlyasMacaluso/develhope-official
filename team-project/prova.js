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

function sortByAge (array){
  console.log(array.sort((member1, member2) => member1.age - member2.age))
}

sortByAge(teamMembers)