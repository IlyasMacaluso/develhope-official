import { useState } from "react"
import { Welcome } from "./Welcome"

export function InteractiveWelcome() {
    const [username, setUsername] = useState("")

    function handleInputChange(event) {
        setUsername(event.target.value)
    }

    return (
        <div>
            <h1>Interactive Welcome</h1>
            <Welcome name={username}/>
            <input name="username" type="text" value={username} onChange={handleInputChange} />
        </div>
    )
}
