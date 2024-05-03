import { useState } from "react"

export function useControlledForm () {
    //gli input dovranno avere name="username" e name="password"
    const [data, setData] = useState({username:"", password:""})

    function handleInputChange (e) {
        const {name, value} = e.target
        setData(prevData => {
            console.log(prevData);
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    return {username: data.username, password:data.password, handleInputChange}
}