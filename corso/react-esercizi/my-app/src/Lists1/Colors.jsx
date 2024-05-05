import Color from "./Color"

//colors (array di oggetti) viene passata come prop da "App.jsx"
function Colors ({colors}) {
    return (
        <ul>
            <h1>Colors</h1>
            {colors.map(color => {
                return <Color key={color.id} color={color} />
            })}
        </ul>
    )
}

export default Colors