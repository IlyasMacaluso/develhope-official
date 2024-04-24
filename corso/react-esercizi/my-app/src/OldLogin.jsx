import { useState } from "react"

function initializeData() {
    return {
        username: "",
        password: "",
        remember: false,
    }
}
export function OldLogin() {
    const [data, setData] = useState(initializeData())

    function handleInputChange(event) {
        const { name, type, value, checked } = event.target
        setData((prevData) => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value,
            }
        })
    }

    return (
        <form>
            <h2>Login</h2>
            <input
                type="text"
                name="username"
                value={data.username}
                onChange={handleInputChange}
            />

            <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleInputChange}
            />
            <input
                type="checkbox"
                name="remember"
                checked={data.remember}
                onChange={handleInputChange}
            />

            <button type="a" disabled={!data.username || !data.password}>Login</button>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </form>
    )
}
