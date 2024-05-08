import Welcome from "./Welcome"
import Counter from "./Counter"

import { Link, Route, Routes } from "react-router-dom"
import NotFound from "./NotFound"
import ShowGithubUser from "./ShowGithubUser"
import GithubUsers from "./GithubUsers"

export function App() {
    return (
        <div className="app">
            <h1>La mia App</h1>
            <hr />
            <div>
                <Link to="/">Counter</Link> | <Link to="counter">Counter</Link> |
                <Link to="/users">Users</Link>
            </div>

            <Routes>
                <Route path="/" element={<Welcome name="Ilyas" />} />
                <Route path="counter" element={<Counter />} />
                <Route path="users" element={<GithubUsers />}>
                    <Route path=":id" element={<ShowGithubUser />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}
