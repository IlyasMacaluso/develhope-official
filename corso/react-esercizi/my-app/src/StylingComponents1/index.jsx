import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import Root from "./Root"
import "./index.css"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* Root contiene "App", ce contiene "Welcome" */}
        <Root />
    </StrictMode>
)
