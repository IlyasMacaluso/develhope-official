import classes from "./Search.module.scss"

export function Search({ setInputValue }) {

    function handleInputChange(e) {
        setInputValue(e.target.value.toUpperCase())
    }

    return <input className={classes.search} onChange={handleInputChange} type="text" placeholder="search an ingredient" />
}
