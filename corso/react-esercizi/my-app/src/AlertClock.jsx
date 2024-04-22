import { Button } from "./Button"

export function AlertClock() {
    function handleShowTime() {
        alert(`Ora attuale: ${new Date().toLocaleTimeString()}`)
    }
    return (
        <div>
            <p>Clicca il bottone per visualizzare l'ora locale attuale</p>
            <Button onClick={handleShowTime} label="Mostra Ora"/>
       </div>
    )
}
