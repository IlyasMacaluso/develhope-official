import { useState } from "react"

function initializeData() {
    return {
        username: "",
        password: "",
        remember: false,
    }
}

export function Login() {

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
        <form action="#" >
            <h1>Login (with buttons and submit)</h1>
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
        </form>
    )
}

