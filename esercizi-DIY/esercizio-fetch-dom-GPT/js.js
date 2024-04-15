/* Utilizzare l'endpoint dell'API per recuperare una battuta di Chuck Norris.
Mostrare la battuta recuperata sulla pagina HTML.
Aggiungere un pulsante o un link che, quando cliccato, permetta di caricare una nuova battuta.
Stilizzare la pagina con CSS per renderla gradevole. */

const body = document.querySelector("body")
const main = document.querySelector("main")
const button = document.querySelector("button")

const section = document.createElement("section")


async function randomJokes () {
    const res = await fetch ("https://api.chucknorris.io/jokes/random")
    const data = await res.json()
   section.textContent = `Joke ${data.value}`
   main.appendChild(section)
}
randomJokes()

button.addEventListener("click", () => {
    section.textContent = ""
    randomJokes()
} )