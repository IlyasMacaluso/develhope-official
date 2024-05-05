import { useState } from "react"
import styles from "./Children.module.scss"

function Children({ title, children }) {
    const [collapsed, setCollapsed] = useState(true)

    function handleContentToggle() {
        setCollapsed((b) => !b)
    }
    return (
        <div>
            <div className="container-title">{title}</div>

            <div className={collapsed ? styles.childrenContent : styles.childrenContentHidden}>
                {children}
            </div>
            <button type="button" onClick={handleContentToggle}>
                Show/Hide Cotnent
            </button>
        </div>
    )
}
export default Children
