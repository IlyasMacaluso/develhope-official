import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import GithubUser from "./GithubUser"

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
        <>
            <p>type another ID from 1 to 10 in the address abr to show that user</p>
            <GithubUser name={data.name} username={data.username} email={data.email} />
        </>
    )
}

export default ShowGithubUsers
