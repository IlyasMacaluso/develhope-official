import FilteredList from "./FilteredList"
import { useMemo } from "react"
function List() {
    let list = [
        { name: "Qualcosa", age: 11, id: 1 },
        { name: "Altro", age: 15, id: 2 },
        { name: "Nome", age: 20, id: 3 },
        { name: "Nooome", age: 19, id: 4 },
        { name: "Nume", age: 17, id: 5 },
    ]

    const filteredList = useMemo(() => {
        return list
            .filter((person) => person.age > 18)
            .map((person) => {
                console.log("filteringlist...")
                return (
                    <FilteredList
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        id={person.id}
                    />
                )
            })
    }, [list])

    return <div>{filteredList}</div>
}
export default List
