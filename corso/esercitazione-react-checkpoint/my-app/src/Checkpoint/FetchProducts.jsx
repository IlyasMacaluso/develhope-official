import { useEffect, useState } from "react"
import { Product } from "./Product"

import classes from "./FetchProduct.module.scss"

export function FetchProducts() {
    const [data, setData] = useState()
    const [filteredData, setFilteredData] = useState()

    async function fetctData(url) {
        try {
            const res = await fetch(url)
            const data = await res.json()
            setData(data)
            setFilteredData(data)
        } catch (error) {
            console.error(error.message)
        }
    }

    function handleFilter(prop) {
        if (prop === "all") {
            setFilteredData(data)
        } else {
            setFilteredData(data.filter((product) => product.category === prop))
        }
    }

    useEffect(() => {
        fetctData("https://fakestoreapi.com/products")
    }, [])

    return (
        <div className={classes.productsContainer}>
            <button onClick={() => handleFilter("men's clothing")}>Men's Clothing</button>
            <button onClick={() => handleFilter("jewelery")}>Jewelry</button>
            <button onClick={() => handleFilter("all")}>All</button>
            {filteredData && filteredData.map((product) => <Product key={product.id} product={product} />)}
        </div>
    )
}
