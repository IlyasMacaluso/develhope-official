import { Button } from "./Button"

export function AlertClock(showTime) {

    return (
        <div>
            <h1>AlertClock</h1>
            <p>Clicca il bottone per visualizzare l'ora locale attuale</p>
            <Button onClick={showTime} label="Mostra Ora"/>
       </div>
    )
}
