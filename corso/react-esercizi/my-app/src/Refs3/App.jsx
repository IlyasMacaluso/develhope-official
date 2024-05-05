import Counter from "./Counter"

export function App() {

    return (
        <div className="app">
            <h1>La mia App</h1>
            <hr />
            <Counter initialValue={0} incrementAmount={5} />
        </div>
    )
}
