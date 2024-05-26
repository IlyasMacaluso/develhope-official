import classes from "./SingleBook.module.scss"

export function SingleBook ({book}) {
    return <div className={classes.book}>
        <img src={book.image} alt="" />
        <h4>{book.title}</h4>
        <p>Author: {book.author}</p>
    </div>
}