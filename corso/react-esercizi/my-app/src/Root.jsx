import { SWRConfig } from "swr"
import { BrowserRouter } from "react-router-dom"
import { App } from "./App"

const fetcher = async (url) => {
    const res = await fetch(url)
    if (!res.ok) {
        const error = new Error("An error occourred while fetching data")
        console.log(error.message)
        error.info = await res.json()
        error.status = res.status
        throw error
    } else {
        return res.json()
    }
}

function Root() {
    return (
        <SWRConfig value={{ fetcher }}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </SWRConfig>
    )
}

export default Root
