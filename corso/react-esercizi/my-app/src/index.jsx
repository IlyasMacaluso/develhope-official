import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import  Root  from "./Root"
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById("root")).render(
     <StrictMode>
        <Root />
     </StrictMode>
)
