import { Age } from "./Age"

export function Welcome({ name, age }) {
    return (
        <div>
            {name ? (
                <p>
                    Hello, <strong>{name}</strong>
                </p>
            ) : (
                <p>Hello, user</p>
            )}
            {age > 0 ? <Age age={age} /> : null}
            {age >= 18 ? <Age age={age} /> : null}

            {/* age prop is present */}
            {age || age === 0 ? <Age age={age} /> : null}
            
            {age >= 18 && age <= 65 ? <Age age={age} /> : null}
            {age >= 18 && age <= 65 && name.toUpperCase() === "Jhon".toUpperCase() ? (
                <Age age={age} />
            ) : null}
        </div>
    )
}
