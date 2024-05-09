import { useParams } from "react-router-dom"
import { useGithubUser } from "./useGithubUser"

function GithubUser() {
    const { username } = useParams()
    const { data, error, loading, handleReloadUser } = useGithubUser(username)

    return (
        <div>
            {loading && !username && <h3>Loading....</h3>}
            {error && (
                <>
                    <h3>{error.message}</h3>
                    <p>
                        Error {error.status}: {error.info.message}
                    </p>
                </>
            )}
            {data && (
                <div>
                    <h3>{data.name}</h3>
                    <p>{data.login}</p>
                    <img height="48px" width="48px" src={data.avatar_url} alt="" />
                </div>
            )}
            <button onClick={handleReloadUser}>Reload User</button>
        </div>
    )
}
export default GithubUser
