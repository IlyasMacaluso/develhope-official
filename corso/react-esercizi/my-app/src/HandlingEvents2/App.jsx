//file di esempio per vedere come sono state passate le props al comenento richeisto dall'esercizio

import { MouseClicker } from "./MouseClicker"

export function App() {
    return (
        <div className="app">
            <h1>La mia App</h1>
            <hr />
            <MouseClicker label="Click me!" />
        </div>
    )
}
