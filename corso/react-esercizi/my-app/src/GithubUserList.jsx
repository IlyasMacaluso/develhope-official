import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"

function GithubUserList() {
    const [data, setData] = useState([])

    async function fetchData() {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
            const json = await res.json()
            setData(json)
        } catch (error) {
            console.error(error.message)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <ul>
            {data &&
                data.map((user, index) => {
                    return (
                        <li key={user.id}>
                            <Link to={`${user.id}`}>{user.name}</Link>
                        </li>
                    )
                })}
            <Outlet />
        </ul>
    )
}

export default GithubUserList
