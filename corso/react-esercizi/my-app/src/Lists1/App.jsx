import Colors from "./Colors"

const colors = [
    { id: 1, name: "green" },
    { id: 2, name: "red" },
    { id: 3, name: "blue" },
    { id: 4, name: "yellow" },
    { id: 5, name: "purple" },
]

export function App() {
    return (
        <div className="app">
            <h1>La mia App</h1>
            <hr />
            <Colors colors={colors} />
        </div>
    )
}
