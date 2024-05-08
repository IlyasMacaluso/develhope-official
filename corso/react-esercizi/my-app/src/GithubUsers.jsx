import { Outlet, useNavigate } from "react-router-dom"

function GithubUsersCustomHooks() {
    const navigate = useNavigate()

    function handleUsernameChange(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const username = formData.get("username")
        navigate(`./${username}`)
        e.target.reset()
    }
    return (
        <>
            <h1>GithubUsers (search)</h1>
            <form action="#" onSubmit={handleUsernameChange}>
                <input name="username" type="text" placeholder="Insert username here" />
                <button type="submit">Search User</button>
            </form>
            <Outlet />
        </>
    )
}

export default GithubUsersCustomHooks
