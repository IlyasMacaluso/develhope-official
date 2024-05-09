import { useState } from "react"
import GithubUser from "./GithubUser"
import { useGithubUser } from "./useGithubUser"

function GithubUsersCustomHooks() {
    const [username, setUsername] = useState("")
    const { data, error, loading, handleReloadUser } = useGithubUser(username)

    function handleUsernameChange(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        setUsername(formData.get("username"))
        e.target.reset()
    }

    return (
        <>
            <h1>GithubUsers (search)</h1>
            <form action="#" onSubmit={handleUsernameChange}>
                <input name="username" type="text" placeholder="Insert username here" />
                <button type="submit">Search User</button>
            </form>
            <button onClick={handleReloadUser}>Reload User</button>
            {loading && <h3>Loading...</h3>}
            {error && <h3>{error.message}</h3>}
            {error && (
                <p>
                    <b>Error {error.status}:</b> {error.info.message}
                </p>
            )}
            {data && (
                <GithubUser
                    key={data.id}
                    username={data.name}
                    name={data.login}
                    img={data.avatar_url}
                    data
                />
            )}
        </>
    )
}

export default GithubUsersCustomHooks
