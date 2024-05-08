import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function GithubUsers() {
    const { id } = useParams()
    const [user, setUser] = useState()

    async function fetchUser() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await res.json()
        setUser(data.name)
    }
    useEffect(() => {
        fetchUser(id)
    })
    return (
        <h3>
            The user possessing id "{id}" is {user}
        </h3>
    )
}

export default GithubUsers
