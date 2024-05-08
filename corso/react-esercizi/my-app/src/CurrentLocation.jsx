import useCurrentLocation from "./useCurrentLocation"

function CurrentLocation() {
    const { location, error, loading, getPosition } = useCurrentLocation()

    console.log(location)
    return (
        <>
            <h2>Current location (with custom hook)</h2>
            {loading && <p>Loading...</p>}
            {location && (
                <ul>
                    The user location is:
                    <li>Latitude: {location.latitude}</li>
                    <li>Longitude: {location.longitude}</li>
                </ul>
            )}
            {error && <p>Error: {error}</p>}
            <button onClick={getPosition}>Get new position</button>
        </>
    )
}

export default CurrentLocation
