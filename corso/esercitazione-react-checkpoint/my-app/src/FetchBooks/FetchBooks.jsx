import { useEffect, useState,  } from "react"
import { SingleBook } from "./SingleBook"

import classes from "./FetchBook.module.scss"

export function FetchBooks() {
    const [data, setData] = useState({ initial: [], current: []})
    const [input, setInput] = useState("")
    const [state, setState] = useState({ loading: true, error: false })

    async function fetchData(url) {
        try {
            const res = await fetch(url)
            const data = await res.json()
            setData({ initial: data, current: data })
            setState((prev) => ({ ...prev, loading: false }))
            console.log(data);
        } catch (error) {
            console.error(error.message)
            setState((prev) => ({ ...prev, error: true }))
        }
    }
    useEffect(() => {
        fetchData("http://private-anon-429bf59738-bookstore.apiary-mock.com/data/books")
    }, [])

    useEffect(() => {
        setData((prev) => {
            return { ...prev, current: prev.initial.filter((book) => book.title.toUpperCase().includes(input)) }
        })
    }, [input])
    return (
        <div className={classes.bookLibrary}>
            {state.loading && <h1>Loading...</h1>}
            {state.error && (
                <h3>
                    Error {error.code}:{error.message}
                </h3>
            )}
            <input
                onChange={(e) => setInput(e.target.value.toUpperCase())}
                type="text"
                placeholder="Search a book"
                value={input}
            />
            {!state.loading && data.current.map((book) => <SingleBook key={book.ISBN} book={book} />)}
        </div>
    )
}
