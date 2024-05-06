import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"
import ShowGithubUser from "./ShowGithubUser"

function GithubUsers() {
    const [data, setData] = useState([])

    async function fetchData() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const json = await res.json()
        setData(json)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <ul>
            <Outlet />

            {data &&
                data.map((user, index) => {
                    return (
                        <li key={index}>
                            <Link to={`${user.id}`}>{user.name}</Link>
                        </li>
                    )
                })}
        </ul>
    )
}

export default GithubUsers
