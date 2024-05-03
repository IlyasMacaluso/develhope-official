function GitHubUser({ username, name }) {

    return (
        <li>
            {(username, name) && (
                <div>
                    <h3>{name}</h3>
                    <p>{username}</p>
                </div>
            )}
        </li>
    )
}
export default GitHubUser
