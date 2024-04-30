export function UncontrolledLogin() {

    function handleFormSubmit(event) {
        event.preventDefault()

        //utilizzare la API formData è che riduce notevolente la quanità di codice necessario
        //per accedere ai dati del form, il codice non deve essere aggiornato se aggiungiamo
        //altre variabili,e inoltre rende più leggibile il codice(il valore che estraiamo con il metodo get() è passato tra parentesi come stringa)
        //un possibile svantaggio è la complessità che può generarsi quando si effettuano operazioni avanzate
        const formData = new FormData(event.target)

        const data = {
            username: formData.get("username"),
            password: formData.get("password"),
            session: formData.get("session") === "on" ? true : false,
        }
        console.log(data)
    }
    return (
        <form className="bg-dark text-white" action="#" onSubmit={handleFormSubmit}>
            <h1>UncontrolledLogin</h1>
            <input name="username" type="text" />
            <input name="password" type="password" />
            <input name="session" type="checkbox" />
            <button type="submit">Login</button>
            <button type="reset">Reset</button>
        </form>
    )
}
