import { useEffect, useState } from "react"

export function useGitHubUser() {

    const [data, setData] = useState (null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    async function fetchData() {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            if (res.status !== 200) {
                setError(new Error("Fetch request failed"))
            } else {
                const data = await res.json()
                setData(data)
                console.log(data)
            }
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect (() => {
        fetchData()
    }, [])

    return {data, error, loading}
}