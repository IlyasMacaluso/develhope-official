import { useCallback, useMemo, useState } from "react"
import GithubUser from "./GithubUser"
import { useGithubUser } from "./useGithubUser"

function GithubUsersCustomHooks() {
    const [username, setUsername] = useState("")
    const { data, error, loading, handleReloadUser } = useGithubUser(username)

    const user = useMemo (() => data, [username])

    function handleUsernameChange(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        setUsername(formData.get("username"))
        e.target.reset()
    }
    const reloadUser = useCallback(() => handleReloadUser(), [username])
    return (
        <>
            <h1>GithubUsers (search)</h1>
            <form action="#" onSubmit={handleUsernameChange}>
                <input name="username" type="text" placeholder="Insert username here" />
                <button type="submit">Search User</button>
            </form>
            <button onClick={reloadUser}>Reload User</button>
            {loading && <h3>Loading...</h3>}
            {error && <h3>{error.message}</h3>}
            {error && (
                <p>
                    <b>Error {error.status}:</b> {error.info.message}
                </p>
            )}
            {user && (
                <GithubUser
                    key={user.id}
                    username={user.name}
                    name={user.login}
                    img={user.avatar_url}
                    data
                />
            )}
        </>
    )
}

export default GithubUsersCustomHooks
