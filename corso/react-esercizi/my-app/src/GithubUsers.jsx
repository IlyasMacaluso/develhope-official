import { useState } from "react";
import { useGitHubUser } from "./useGithubUser";
import GitHubUser from "./GitHubUser";

function GithubUsersCustomHooks () {
    const [username, setUsername] = useState("")
    const {data, error, loading } = useGithubUser()

    function handleUsernameChange(e) {
        e.preventDefault()

        const formData = new FormData(e.target)
        setUsername(formData.get("username"))
        e.target.reset()
    }

    return (
        <>
            <h1>GithubUsers (search)</h1>
            <ul className="results">
                {loading && <h2>Loading...</h2>}
                {error && <h2>{error}</h2>}
                {username &&
                    data &&
                    username !== "" &&
                    data
                        .filter((user) => user.name.toUpperCase().includes(username.toUpperCase()))
                        .map((user, index) => (
                            <>
                                <GithubUser
                                    key={index}
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
        </>)
}

export default GithubUsersCustomHooks