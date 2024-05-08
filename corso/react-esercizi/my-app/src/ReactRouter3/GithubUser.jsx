function GitHubUser({ username, name, email }) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{username}</p>
            <p>{email}</p>
        </div>
    )
}
export default GitHubUser
