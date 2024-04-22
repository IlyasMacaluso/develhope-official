/* onClick è una fuzione che viene passata come parametro dall'elemento genitore,
e che istruisce il bottonome sul come compontarsi quanto viene attivato l'evento "click" */
export function Button ( {label, onClick} ) {
    return <button onClick={onClick}>{label}</button>
}
