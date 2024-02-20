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
  ];

// funzione 3: Print the team middle age.
// function avgAge(array) {
//   let ages = [];
//   array.filter((person) => ages.push(person.age));
//   let avgAge = ages.reduce((a, age) => a + age, 0) / ages.length;
//   console.log(`The average members age is: ${avgAge}`)
// }

function avgAge(array) {
    const ages = array.map(person => person.age)
    const ageSum = ages.reduce((number, cumulatore) => cumulatore + number, 0)
    const avgAge = ageSum / ages.length
    console.log(`The average member age is: ${avgAge}`)
}

avgAge(teamMembers)