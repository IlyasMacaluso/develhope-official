import GitHubUsers from "./GitHubUsers"
import { Counter } from "./Counter"
import List from "./List"

export function App() {

    return (
        <div className="app">
            <h1>La mia App</h1>
            <hr />
            <GitHubUsers />
            <Counter />
            <hr />
            <List />
        </div>
    )
}
