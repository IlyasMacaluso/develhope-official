/* Si richiede di sviluppare un'applicazione web che utilizzi l'API di GitHub per 
ecuperare una lista di repository e consenta agli utenti di filtrare i risultati in base 
al linguaggio di programmazione. Gli utenti devono poter inserire il linguaggio di programmazione
 desiderato in un campo di input e visualizzare solo i repository che corrispondono al linguaggio 
 specificato. */

const body = document.querySelector("body")
const main = document.querySelector("main")
const searchField = document.querySelector(".search-field")
const serchBtn = document.querySelector(".search-btn")

const section = document.querySelector("section")

async function getRepoByTopic(topic) {
    try {
        const res = await fetch(`https://api.github.com/search/repositories?q=language:${topic}`)
        const data = await res.json()
        if (data.items) {
            const language = document.createElement("h2")
            language.textContent = `List of "${topic}" repositories`
            section.appendChild(language)
            data.items.forEach((element) => {
                const result = document.createElement("div")
                result.setAttribute("class", "result")
                result.innerHTML = `
                <h4>${element.name}</h4>
                <p>${element.description}</p>
                `
                console.log(section)
                section.appendChild(result)
            })
        } else if (topic === "") {
            const message = document.createElement("h2")
            message.textContent = "Please enter a topic"
            section.appendChild(message)
        } else {
            const message = document.createElement("h2")
            message.textContent = `${data.errors[0].message}`
            section.appendChild(message)
        }
    } catch (err) {
        const error = document.createElement("h2")
        err.textContent = `${error.message}`
        section.appendChild(error)
    }
}

serchBtn.addEventListener("click", () => {
    const topic = searchField.value
    section.textContent = ""
    getRepoByTopic(topic)
})
