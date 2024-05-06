import { createRoot } from "react-dom/client"
import  Root  from "./Root"
import { StrictMode } from "react"
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById("root")).render(
     <StrictMode>
        <Root />
     </StrictMode>
)
