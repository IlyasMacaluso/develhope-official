//file di esempio per vedere come sono state passate le props al comenento richeisto dall'esercizio

import { Welcome } from "./Welcome"

export function App() {
    return (
        <div className="app">
            <h1>La mia App</h1>
            <hr />
            <Welcome name="jhon" age={19} />
        </div>
    )
}
