//1 crea una promise che secupera i dati dell'utente
//2 crea una promise che recupera i post dell'utente
//chiama le funzioni per recuperare e stampare i dati e i post
const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Ilyas" },
    { id: 3, name: "Rickyjoe" },
]

const posts = ["Post 1", "Post 2", "Post 3"]

let fetchUserData = (users, userId) => {
    console.log("Filtering data...")
    return new Promise((resolve, reject) => {
        if (
            typeof users === "object" &&
            typeof users.find((user) => user.id === userId) === "object"
        ) {
            let user = users.find((user) => user.id === userId)
            setTimeout(() => {
                resolve(user) //come il return di una funzione (in caso di successo)
            }, 1000)
        } else {
            reject("Error processing data: wrong type of data") //cone il return di una funzione (in caso di errore)
        }
    })
}

let fetchUserPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                resolve(posts)
            } else {
                reject("Errore")
            }
        }, 2000)
    })
}

fetchUserData(users, 1)
    .then((user) => {
        console.log(user)
        fetchUserPosts()
            .then((posts) => {
                console.log(posts)
            })
            .catch((error) => {
                console.log(error)
            })
    })
    .catch((error) => {
        console.log(error)
    })
