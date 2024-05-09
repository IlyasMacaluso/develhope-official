import useSWR from "swr"

const fetcher = async (url) => {
    const res = await fetch(url)
    if (!res.ok) {
        const error = new Error("An error occourred while fetching data")
        console.log(error.message)
        error.info = await res.json()
        error.status = res.status
        throw error
    } else {
        return res.json()
    }
}

export function useGithubUser(username) {
    console.log(username)
    const { data, error, mutate } = useSWR(
        `https://api.github.com/users/${username}`,
        username && fetcher,
        {
            onErrorRetry: (error, revalidate, { retryCount }) => {
                // Never retry on 404.
                if (error.status === 403) return

                // Only retry up to 10 times.
                if (retryCount >= 2) return

                // Retry after 5 seconds.
                setTimeout(() => revalidate({ retryCount }), 5000)
            },
        }
    )

    function handleReloadUser() {
        mutate()
    }
    return {
        data,
        error,
        loading: !error && !data && username,
        handleReloadUser,
    }
}
