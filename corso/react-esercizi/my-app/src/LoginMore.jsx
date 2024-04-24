import { useState } from "react"

function initializeData() {
    return {
        username: "",
        password: "",
        remember: false,
    }
}
export function LoginMore( {onLogin}) {
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
        <form action="submit">
            <h2>Login</h2>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                name="username"
                id="username"
                value={data.username}
                onChange={handleInputChange}
            />

            <label htmlFor="password">password</label>
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

            <button disabled={!data.username || !data.password} onClick={handleLogin}>Login</button>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </form>
    )
}
