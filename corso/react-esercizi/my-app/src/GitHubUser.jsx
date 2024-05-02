import { useEffect, useState } from "react"

function GitHubUser({ username }) {
    const [userdata, setUserdata] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then((res) => {
                if (res.status !== 200) {
                    setError(new Error("Failed retrieving data"))
                } else {
                    setError(null)
                    return res.json()
                }
            })
            .then((data) => {
                setUserdata(data)
                console.log(data)
            })
            .catch((error) => {
                setError(error.message)
                console.log(error.message)
            })
            .finally(() => setLoading(false))
    }, [username])

    return (
        <div>
            <h1>GitHubUser</h1>
            <h2>{userdata && userdata.login}</h2>
            <h2>{error && error.message}</h2>
            <h2>{loading && "Loading..."}</h2>
        </div>
    )
}
export default GitHubUser
