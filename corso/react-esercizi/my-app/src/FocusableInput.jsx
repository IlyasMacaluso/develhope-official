import { useEffect, useRef } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function FocusableInput() {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef?.current.focus()
    }, [])

    return (
        <div>
            <h1>FocusableInput</h1>
                <Form.Label>This input is focused on page load</Form.Label>
                <Form.Control name="username" ref={inputRef} type="text" />
                <Button variant="primary" type="submit">
                    Literally do nothing
                </Button>
        </div>
    )
}

export default FocusableInput
