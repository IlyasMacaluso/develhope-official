async function fetchData() {
    try {
        const response = await fetch("https://api.potterdb.com/v1/books")
        const myData = await response.json() //data in questo caso è un oggetto, ma potrebbe essere un array;
        return myData.data //data è l'oggetto interno a myData, contenente la lista di libri di Harry Potter;
    } catch (error) {
        console.error(error)
    }
}

async function getData() {
    const HPBooks = await fetchData()
    if (HPBooks) {
        console.log(HPBooks)
        let bookData = [[], [], []]
        HPBooks.forEach((book) => {
            bookData.push(({ title, cover, summary } = book.attributes))
        })
        console.log(bookData);
        return bookData
    } else {
        console.log("Fetch failed")
    }
}

getData()
/* 
const bookTitle = document.querySelector(".book-title")
const bookCover = document.querySelector(".book-cover")
const bookSummary = document.querySelector(".book-summary")

const prevBook = document.querySelector("prev")
const nextBook = document.querySelector(".next")

let book = 0

async function setPage(book) {
    //first index (0-2) -> [0]title - [1]book cover - [2]summary;
    //second index (0-6) -> book1 to book7
    const bookData = await getData()
    if (bookData) {
        bookTitle.innerText = bookData[0][book]
        bookCover.setAttribute("src", bookData[1][book])
        bookSummary.innerText = bookData[2][book]
    }
}

setPage(book)

nextBook.addEventListener("click", () => {
    if (book <= 7) {
        book = book + 1
        setPage(book)
    }
})
prevBook.addEventListener("click", () => {
    if (book > 0) {
        book = book - 1
        setPage(book)
    }
}) */