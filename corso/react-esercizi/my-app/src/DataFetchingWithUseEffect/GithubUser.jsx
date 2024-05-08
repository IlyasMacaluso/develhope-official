function GithubUser({ username, name }) {

    return (
        <li>
            {(username, name) && (
                <div>
                    <h3>{name}</h3>
                    <p>{username}</p>
                    <p>{email}</p>
                </div>
            )}
        </li>
    )
}
export default GithubUser
