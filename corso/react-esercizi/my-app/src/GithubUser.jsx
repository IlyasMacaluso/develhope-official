function GithubUser({ username, name, img }) {

    return (
        <div>
            {(username, name, img) && (
                <div>
                    <h3>{name}</h3>
                    <p>{username}</p>
                    <img height="48px" width="48px" src={img} alt="" />
                </div>
            )}
        </div>
    )
}
export default GithubUser
