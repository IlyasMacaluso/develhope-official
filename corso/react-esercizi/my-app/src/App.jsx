import Welcome from "./Welcome"
import Counter from "./Counter"

import { Link, Route, Routes } from "react-router-dom"
import NotFound from "./NotFound"
import ShowGithubUser from "./ShowGithubUser"
import GithubUserList from "./GithubUserList"

export function App() {
    return (
        <div className="app">
            <h1>La mia App</h1>
            <hr />
            <div>
                <Link to="/">Welcome</Link> | <Link to="counter">Counter</Link> |
                <Link to="/users">Users</Link>
            </div>

            <Routes>
                <Route path="/" element={<Welcome name="Ilyas" />} />
                <Route path="counter" element={<Counter initialValue={100} incrementAmount={10} />} />
                <Route path="users" element={<GithubUserList />}>
                    <Route index element = {
                        <div>
                            <h3>Select a user to show their informations</h3>
                        </div>
                    } />
                    <Route path=":id" element={<ShowGithubUser />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}
