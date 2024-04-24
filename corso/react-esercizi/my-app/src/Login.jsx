import { useState } from "react"

function initializeData() {
    return {
        username: "",
        password: "",
        remember: false,
    }
}
export function Login({ onLogin }) {
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
    function handleLogin(event) {
        event.preventDefault()
        onLogin(data)
    }
    function handleReset(event) {
        setData(() => initializeData())
    }

    return (
        <form action="#" onSubmit={handleLogin}>
            <h2>Login with buttons</h2>
            <input
                type="text"
                name="username"
                id="username"
                value={data.username}
                onChange={handleInputChange}
            />

            <input
                type="password"
                name="password"
                id="password"
                value={data.password}
                onChange={handleInputChange}
            />

            <label htmlFor="remember">Remember me</label>
            <input
                type="checkbox"
                name="remember"
                id="remember"
                checked={data.remember}
                onChange={handleInputChange}
            />

            <button type="submit" disabled={!data.username || !data.password}>Login</button>
            <button type="button" onClick={handleReset}>Reset</button>

            <pre>{JSON.stringify(data, null, 2)}</pre>
        </form>
    )
}

