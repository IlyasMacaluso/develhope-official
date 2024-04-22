// index.js il primo file che verrà caricato e che renderizzerà la nostra applicazione

import { App } from "./App"
import { createRoot } from "react-dom/client"

//abbiamo creato un componente e lo abbiamo utilizzato all'interno del file index.jsx, 
//ma come facciamo a renderizzarlo sul browser?

//utilizziamo la funzione "createRoot",passando come argomento l'elemento HTML che vogliamo utilzizare come radice
createRoot(document.getElementById("root"))
    //e successivamente utilizziamo il metodo "render" su di esso, passando come argomento il componente che vogliamo renderizzare
    .render(<App/>)


