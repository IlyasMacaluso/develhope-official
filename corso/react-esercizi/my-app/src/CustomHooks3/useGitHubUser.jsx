import { useEffect, useState } from "react"

export function useGitHubUser() {

    const [data, setData] = useState (null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    // nota: sto usando una API differente perchè quella di github veniva bloccata dopo una decina di tentativi bloccandomi l'accesso per ore
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