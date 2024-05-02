import { useState } from "react"
import GitHubUser from "./GitHubUser"

function GitHubUsers() {
    const [username, setUsername] = useState()

    function handleUsernameChange(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        console.log(formData.get("username"))
        setUsername(formData.get("username"))
    }

    return (
        <>
            <GitHubUser username={username} />
            <form action="#" onSubmit={handleUsernameChange}>
                <input name="username" type="text" placeholder="Insert username here" />
                <button type="submit">Search User</button>
            </form>
        </>
    )
}

export default GitHubUsers
