import { useEffect, useState } from "react"
import GitHubUser from "./GitHubUser"

function GitHubUsers() {
    const [username, setUsername] = useState(null)
    const [userdata, setUserdata] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    // nota: sto usando una API differente perchè quella di github veniva bloccata dopo una decina di tentativi bloccandomi l'accesso per ore
    async function fetchData() {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            if (res.status !== 200) {
                setError(new Error("Fetch request failed"))
            } else {
                const data = await res.json()
                setUserdata(data)
                console.log(data)
            }
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    function handleUsernameChange(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        setUsername(formData.get("username"))
    }

    return (
        <>
            <h1>GitHubUsers (search)</h1>
            <ul className="results">
                {loading && <h2>Loading...</h2>}
                {error && <h2>{error}</h2>}
                {username &&
                    userdata &&
                    username !== "" &&
                    userdata
                        .filter((user) => user.name.toUpperCase().includes(username.toUpperCase()))
                        .map((user) => (
                            <>
                                <GitHubUser
                                    key={Math.random()}
                                    username={user.username}
                                    name={user.name}
                                />
                            </>
                        ))}
            </ul>

            <form action="#" onSubmit={handleUsernameChange}>
                <input name="username" type="text" placeholder="Insert username here" />
                <button type="submit">Search User</button>
            </form>
        </>
    )
}

export default GitHubUsers
