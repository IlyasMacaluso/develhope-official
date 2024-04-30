import { useState } from "react"
import styles from "./Container.module.scss"
import ContainerChildren from "./ContainerChildren"

function Container({ title, children }) {
    const [collapsed, setCollapsed] = useState(true)

    function handleContentToggle () {
        setCollapsed(b => !b)
    }
    return (
        <div className={styles.container}>
            <div className="container-title">{title}</div>
           {/*  da chiedere perchè la classe non funziona sul componente direttamente
            <ContainerChildren className={collapsed ? styles.containerContent : styles.containerContentHidden} /> */}
            <div className={collapsed ? styles.containerContent : styles.containerContentHidden}>{children}</div>
            <button type="button" onClick={handleContentToggle}>Show/Hide Cotnent</button>
        </div>
    )
}

export default Container
