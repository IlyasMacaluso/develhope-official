import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ShowGithubUser() {
    const [data, setData] = useState(null)
    const { id } = useParams()

    async function fetchUser() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const json = await res.json()
        setData(() => json)
        console.log(data);
    }
    useEffect(() => {
        fetchUser()
    }, [id])

    return (
        data &&
        <div>
            <h4>Name: {data.name}</h4>
            <p>Username :{data.username}</p>
            <p>Email {data.email}</p>
            <p>Company {data.company.name}</p>
        </div>
    )
}

export default ShowGithubUser
