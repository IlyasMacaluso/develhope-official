import Welcome from "./Welcome"
import Counter from "./Counter"
import GitHubUsers from "./GitHubUsers"

import { Link, Route, Routes } from "react-router-dom"

export function App() {
    return (
        <div className="app">
            <h1>La mia App</h1>
            <hr />
            <div>
                <Link to="/">Counter</Link> | <Link to="counter">Counter</Link> |
                <Link to="/2">User with id 2</Link>
            </div>

            <Routes>
                <Route path="/" element={<Welcome name="Ilyas" />} />
                <Route path="counter" element={<Counter />} />
                <Route path=":id" element={<GitHubUsers />} />
            </Routes>
        </div>
    )
}
