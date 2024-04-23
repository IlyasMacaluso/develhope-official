export function MouseClicker({ label }) {
    function handleBtnClick(event) {
        console.log(event.currentTarget.name)
    }
    function handleImgClick (event) {
        console.log(event.currentTarget.src)
        event.stopPropagation()
        //in questo modo viene stampato solo "src" se clicco l'immagine 
        //e solo "name" se clicco il bottone dove non c'è l'immagine
    }
    return (
        <div>
            <button onClick={handleBtnClick} name="one">
                <img onClick={handleImgClick}
                    src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
                    alt="an arrow icon"
                    width="16" 
                    height="16;"
                />
                {label}
            </button>
        </div>
    )
}
