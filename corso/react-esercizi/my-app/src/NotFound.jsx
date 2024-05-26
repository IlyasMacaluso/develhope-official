import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <h3>Page not found!</h3>
            <Link to="/">Return to home</Link>
        </div>
    )
}

export default NotFound