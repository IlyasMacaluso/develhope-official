import classes from "./Product.module.scss"

export function Product ({product}) {
    return <div className={classes.product}>
        <h2>{product.title}</h2>
        <p>{product.price}</p>
        <p>{product.category}</p>
    </div>
}