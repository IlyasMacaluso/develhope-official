import useSWR from "swr"

export function useGithubUser(username) {
    console.log("Loading data...")
    const { data, error, mutate } = useSWR(`https://api.github.com/users/${username}`)
    return {
        data,
        error,
        loading: !error && !data && username,
        handleReloadUser: () => mutate(),
    }
}
