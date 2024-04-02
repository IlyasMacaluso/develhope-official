const button = document.querySelector(".btn")

function setUsername (username) {
    const name = document.querySelector(".username")
    name.innerText = username
    localStorage.setItem("username", username)
}

button.addEventListener("click", () => {
    const input = document.querySelector(".username-input")
    const username = input.value
    setUsername (username)
})

const savedUsername = localStorage.getItem("username")
if (savedUsername) {
    setUsername (savedUsername)
}
