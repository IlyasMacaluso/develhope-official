import useSWR from "swr"

export function useGithubUser(username) {
    console.log("Loading data...")
    const { data, error, mutate } = useSWR(
        username ? `https://api.github.com/users/${username}` : null
    )
    return {
        data,
        error,
        loading: !error && !data && username,
        handleReloadUser: () => mutate(),
    }
}
