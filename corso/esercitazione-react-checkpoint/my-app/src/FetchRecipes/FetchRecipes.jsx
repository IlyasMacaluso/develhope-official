import { useEffect, useState } from "react"
import { SingleRecipe } from "./SingleRecipe"
import { Search } from "./Search"
import classes from "./FetchRecipes.module.scss"

export function FetchRecipes() {
    const [data, setData] = useState()
    const [filteredData, setFilteredData] = useState()
    const [inputValue, setinputValue] = useState("")

    async function fetchData(url) {
        try {
            const res = await fetch(url)
            const data = await res.json()
            setData(data.recipes)
            setFilteredData(data.recipes)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        fetchData("https://dummyjson.com/recipes")
    }, [])

    useEffect(() => {
        if (data) {
            setFilteredData(data.filter((rec) => rec.name.toUpperCase().includes(inputValue)))
        }
    }, [inputValue])

    return (
        <div className={classes.recipesWrapper}>
            <Search setInputValue={setinputValue} />
            {filteredData ? (
                filteredData.length > 0 ? (
                    filteredData
                        .filter((recipe) => recipe.name.toUpperCase().includes(inputValue))
                        .map((recipe) => {
                            return <SingleRecipe key={recipe.id} data={recipe} />
                        })
                ) : (
                    <p>No reult matching your search</p>
                )
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    )
}