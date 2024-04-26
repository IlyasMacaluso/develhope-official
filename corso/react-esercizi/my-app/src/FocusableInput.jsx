import { useEffect, useRef } from "react"

function FocusableInput() {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef?.current.focus()
    }, [])

    return (
        <div>
            <h1>FocusableInput</h1>
            <input name="username" ref={inputRef} type="text" />
        </div>
    )
}

export default FocusableInput
