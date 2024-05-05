//file di esempio per vedere come sono state passate le props al comenento richeisto dall'esercizio

import { Login } from "./Login"

export function App() {
    function onLogin(data) {
        console.log(data)
    }
    return (
        <div className="app">
            <h1>La mia App</h1>
            <hr />
            <Login onLogin={onLogin} />
        </div>
    )
}
