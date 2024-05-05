import { useEffect, useState } from "react"

function useCurrentLocation() {
    const [location, setLocation] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    function getPosition() {
        setLoading(true)
        navigator.geolocation.getCurrentPosition(successCb, errorCb)
    }

    useEffect(() => {
        getPosition()
            setLoading(false)
    }, [loading])

    const successCb = (position) => {
        setLocation(() => {
            return { latitude: position.coords.latitude, longitude: position.coords.longitude }
        })
        setError(false)
    }

    const errorCb = (e) => {
        setError(e.message)
        setLocation(null)
    }
    return { location, error, loading, getPosition }
}

export default useCurrentLocation
