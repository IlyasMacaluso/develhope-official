/*
•	Aggiungere un bottone ‘Aggiungi al carrello’ a ogni card
•	Creare un array vuoto che rappresenta il carrello
•	Al click del bottone inserire la stringa ‘prodotto’ nell’array 
di prodotti e far comparire un alert con scritto ‘Prodotto aggiunto al carrello’ 
 + il numero di prodotti nel carrello */

const container = document.querySelector(".container")
let carrello = []

async function fetchData() {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    data.forEach((product) => {
        const card = document.createElement("div")
        card.setAttribute("class", "card")
        card.innerHTML = `
        <h3>${product.title}</h3>
        <p>${product.price}</p>
        <img src="${product.image}" alt="">
        <button class="shp-btn">Aggiungi al carrello</button>
        `
        container.appendChild(card)
    })
    const buttons = document.querySelectorAll("button")
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            carrello.push("prodotto")
            console.log(carrello)
            alert(`Prodotto aggiunto al carrello ${carrello.length}`)
        })
    })
}
fetchData()
