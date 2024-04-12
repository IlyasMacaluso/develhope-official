const main = document.querySelector(".card-paper main")

const searchField = document.querySelector(".search-card")
const searchBtn = document.querySelector(".search-card-btn")

async function fetchData() {
    try {
        const request = await fetch("https://ringsdb.com/api/public/cards/?_format=json")
        const data = await request.json()
        const stringData= JSON.stringify(data)
        sessionStorage.setItem("sessionData", stringData)
        return data
    } catch (error) {
        console.error(error)
    }
}

async function preloadCard () {
    const cards = await fetchData()
    const randomCard = cards[Math.floor(Math.random() * 1337)]
    const newCard = document.createElement("div")
    if (randomCard.flavor) {
        newCard.innerHTML = `
        <h1 class="card-title">${randomCard.name}</h1>
        <img class="card-image" src="https://ringsdb.com/${randomCard.imagesrc}"/>
        <p class="card-flavor">${randomCard.flavor}</p>
        `
    } else {
        newCard.innerHTML = `
        <h1 class="card-title">${randomCard.name}</h1>
        <img class="card-image" src="https://ringsdb.com/${randomCard.imagesrc}"/>
        `
    }
    main.appendChild(newCard)
}
preloadCard()

async function searchCard(name) {
    try {
        const cards = JSON.parse(sessionStorage.getItem("sessionData"))
        main.innerHTML = ``
        cards.forEach((card) => {
            if (card.name.toUpperCase().includes(name.toUpperCase())) {
                const result = document.createElement("div")
                if (card.flavor) {
                    result.innerHTML = `
                    <h1 class="card-title">${card.name}</h1>
                    <img class="card-image" src="https://ringsdb.com/${card.imagesrc}"/>
                    <p class="card-flavor">${card.flavor}</p>
                    `
                } else {
                    result.innerHTML = `
                    <h1 class="card-title">${card.name}</h1>
                    <img class="card-image" src="https://ringsdb.com/${card.imagesrc}"/>
                    `
                }
                main.appendChild(result)
                console.log(result)
            }
        })
    } catch (error) {
        console.error(error)
    }
}

searchBtn.addEventListener("click", () => {
    if (searchField.value != "") {
        const toSearch = searchField.value
        searchCard(toSearch)
    }
})
searchField.addEventListener("keydown", () => {
    if (event.key === "Enter") {
        const toSearch = searchField.value
        searchCard(toSearch)
    }
})

/* const nextCard = document.querySelector(".next")
const prevCard = document.querySelector(".previous")

nextCard.addEventListener("click", async () => {
    const cards = await fetchData()
    if (currentIndex < cards.length) {
        cardTitle.innerText = `${currentIndex + 1})  ${cards[currentIndex + 1].name}`
        cardFlavor.innerHTML = cards[currentIndex + 1].flavor
        cardImage.setAttribute("src", `https://ringsdb.com/${cards[currentIndex + 1].imagesrc}`)
        currentIndex = currentIndex + 1
    }
})

prevCard.addEventListener("click", async () => {
    const cards = await fetchData()
    if (currentIndex > 0) {
        cardTitle.innerText = `${currentIndex - 1}) ${cards[currentIndex - 1].name}`
        cardFlavor.innerHTML = cards[currentIndex - 1].flavor
        cardImage.setAttribute("src", `https://ringsdb.com/${cards[currentIndex - 1].imagesrc}`)
        currentIndex = currentIndex - 1
    }
}) */