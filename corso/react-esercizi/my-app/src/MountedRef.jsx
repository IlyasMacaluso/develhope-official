import { useEffect, useRef } from "react"

function MountedRef () {

    const mountedRef = useRef(false)

    useEffect(() => {
        if (!mountedRef.current) {
            mountedRef.current = true
            console.log("mounting for the first time")
        }
    })

    return <h1>MounterRef (c.log)</h1>
}

export default MountedRef