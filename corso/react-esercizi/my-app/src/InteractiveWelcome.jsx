import { useState } from "react"
import { Welcome } from "./Welcome"

export function InteractiveWelcome() {
    const [username, setUsername] = useState("")

    function handleInputChange(event) {
        setUsername(event.target.value)
    }

    return (
        <div>
            <Welcome name={username}/>
            <input name="username" type="text" value={username} onChange={handleInputChange} />
        </div>
    )
}
