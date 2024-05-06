import { useCallback, useEffect, useMemo, useState } from "react"

export function useGitHubUser() {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchData = useCallback(async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            if (res.status !== 200) {
                setError(new Error("Fetch request failed"))
            } else {
                const data = await res.json()
                setData(data)
            }
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }, [])

    const fetchedData = useCallback(
        useEffect(() => {
            fetchData
        }, []),
        []
    )

    fetchedData

    return { data, error, loading }
}
