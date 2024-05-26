import classes from "./SingleRecipe.module.scss"

export function SingleRecipe({ data }) {
    return (
        <div className={classes.RecipeWrapper}>
            {data ? <h3>{data.name}</h3> : <h3>loading...</h3>}
            {data.ingredients &&
                data.ingredients.map((ingredient, index) => {
                    return <li key={index}>{ingredient}</li>
                })}
            <h4>Istructions</h4>
            <p>{data.instructions}</p>
        </div>
    )
}
