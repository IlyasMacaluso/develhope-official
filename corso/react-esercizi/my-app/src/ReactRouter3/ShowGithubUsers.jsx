import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ShowGithubUsers() {
    const { id } = useParams()
    const [data, setData] = useState({})

    async function fetchUser() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await res.json()
        setData(data)
    }
    useEffect(() => {
        fetchUser(id)
    })
    return (
        <div>
            <h2>The user possessing id "{id}" is:</h2>
            <h4>{data.name}</h4>
            <p>Urename: {data.username}</p>
            <p>Email: {data.email}</p>
        </div>
    )
}

export default ShowGithubUsers