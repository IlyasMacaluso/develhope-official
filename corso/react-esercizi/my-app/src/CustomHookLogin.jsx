import { useControlledForm } from "./useControlledForm"

function CustomHookLogin() {
    const { username, password, handleInputChange } = useControlledForm()

    return (
        <div>
            <input type="text" name="username" value={username} onChange={handleInputChange} />
            <input type="password" name="password" value={password} onChange={handleInputChange} />
            <button type="button">Login</button>
        </div>
    )
}

export default CustomHookLogin
