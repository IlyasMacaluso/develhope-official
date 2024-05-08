import useSWR from "swr"

const fetcher = async (url) => {
    const res = await fetch(url)
    if (!res.ok) {
        const error = new Error("An error occourred while fetching data")
        console.log( error.message )
        error.info = await res.json()
        error.status = res.status
        throw error
    }
    return res.json()
}

export function useGithubUser(username) {
    console.log(username)
    const { data, error, mutate } = useSWR(
        `https://api.github.com/users/${username}`,
        username && fetcher
    )

    function fetchGithubUser(username) {
        if (username) {
            mutate()
        }
    }

    return {
        data,
        error,
        loading: !error && !data,
        fetchGithubUser,
    }
}
