async function fetchData() {
    try {
        const request = await fetch("https://ringsdb.com/api/public/cards/?_format=json")
        const data = await request.json()
        let myData = []
        data.forEach((card) => {
            const { name, flavor, imagesrc } = card
            myData.push({ name, flavor, imagesrc })
        })
        return myData
    } catch (error) {
        console.error(error)
    }
}
const cardTitle = document.querySelector(".card-title")
const cardImage = document.querySelector(".card-image")
const cardFlavor = document.querySelector(".card-flavor")

let currentIndex = 0

async function preloadCard() {
    try {
        const cards = await fetchData()
        const card = cards[currentIndex]
        cardTitle.innerText = `${currentIndex}) ${card.name}`
        cardFlavor.innerHTML = card.flavor
        cardImage.setAttribute("src", `https://ringsdb.com/${card.imagesrc}`)
    } catch (error) {
        console.error(error)
    }
}

const searchField = document.querySelector(".search-card")
const searchBtn = document.querySelector(".search-card-btn")

async function searchCard(name) {
    try {
        const cards = await fetchData()
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].name.toUpperCase().includes(name.toUpperCase())) {
                cardTitle.innerText = `${i}) ${cards[i].name}`
                cardFlavor.innerHTML = cards[i].flavor
                cardImage.setAttribute("src", `https://ringsdb.com/${cards[i].imagesrc}`)
                currentIndex = i
                break
            } else if (i === cards.length - 1) {
                cardTitle.innerText = "Sorry, we could not find any card with this name!"
                cardFlavor.innerHTML = ""
                cardImage.setAttribute(
                    "src",
                    `https://th-thumbnailer.cdn-si-edu.com/bgmkh2ypz03IkiRR50I-UMaqUQc=/1000x750/filters:no_upscale():focal(1061x707:1062x708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/55/95/55958815-3a8a-4032-ac7a-ff8c8ec8898a/gettyimages-1067956982.jpg`
                )
            }
        }
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
const nextCard = document.querySelector(".next")
const prevCard = document.querySelector(".previous")

nextCard.addEventListener("click", async () => {
    const cards = await fetchData()
    if (currentIndex < cards.length) {
        cardTitle.innerText = `${(currentIndex + 1)})  ${cards[currentIndex + 1].name}`
        cardFlavor.innerHTML = cards[currentIndex + 1].flavor
        cardImage.setAttribute("src", `https://ringsdb.com/${cards[currentIndex + 1].imagesrc}`)
        currentIndex = currentIndex + 1
    }
})

prevCard.addEventListener("click", async () => {
    const cards = await fetchData()
    if (currentIndex > 0) {
        cardTitle.innerText = `${(currentIndex - 1)}) ${cards[currentIndex - 1].name}`
        cardFlavor.innerHTML = cards[currentIndex - 1].flavor
        cardImage.setAttribute("src", `https://ringsdb.com/${cards[currentIndex - 1].imagesrc}`)
        currentIndex = currentIndex - 1
    }
})

preloadCard()

fetchData()
