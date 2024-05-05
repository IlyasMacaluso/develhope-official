import { useState } from "react"
import { Clock } from "./Clock"
import { LanguageContext } from "./LanguageContext"

function ClockWrapper() {
    const [language, setLanguage] = useState("en")

    function handleSetLanguage(e) {
        setLanguage((l) => {
            l = e.target.value
            console.log(l)
            return l
        })
    }

    return (
        <div>
            <label htmlFor="language">Select a language:</label>
            <select id="language" onChange={handleSetLanguage}>
                <option value="en">English</option>
                <option value="it">Italian</option>
            </select>
            <LanguageContext.Provider value={language}>
                <Clock />
            </LanguageContext.Provider>
        </div>
    )
}

export default ClockWrapper
