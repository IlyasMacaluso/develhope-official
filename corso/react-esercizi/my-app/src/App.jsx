import ShowGithubUsers from "./ReactRouter3/ShowGithubUsers"
import { Route, Routes } from "react-router-dom"

export function App() {
    return (
        <div className="app">
            <h1>La mia App</h1>
            <Routes >
                <Route path=":id" element= {<ShowGithubUsers /> } />
            </Routes>
        </div>
    )
}
