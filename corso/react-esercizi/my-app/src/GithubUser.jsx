function GithubUser({ username, name, email }) {

    return (
        <li>
            {(username, name, email) && (
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
