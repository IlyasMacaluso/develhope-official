import { createRoot } from "react-dom/client"
import { App } from "./App"
import { StrictMode } from "react"
import "./index.css"
import "./Clock.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById("root")).render(
     <StrictMode>
        <App />
     </StrictMode>
)
