import { Age } from "./Age"

/* export function Welcome({ name, age }) {
    // Creo un if else per impostare un valore predefinito nel caso in cui il parametro name non venga passato
    if (name) {
        return (
            <div>
                <p>
                    Welcome, <strong>{name}</strong>
                </p>
                <Age age={age} />
            </div>
        )
    } else {
        return <p>Welcome, user</p>
    }
} */

//modo migliore di fare la stessa cosa
/* export function Welcome({ name, age }) {
    // Creo un if else per impostare un valore predefinito nel caso in cui il parametro name non venga passato
      return <div>
               {name && <p>Welcome, <strong>{name}</strong></p>}
               {age && <Age age={age} />}

            </div>
} */

//oppure ancora
export function Welcome({ name, age }) {
    // Creo un if else per impostare un valore predefinito nel caso in cui il parametro name non venga passato
      return <div>
               {name ?<p>Welcome, <strong>{name}</strong></p> :<p>Welcome, user</p>}
               {age !=0 ?<Age age={age}/> :<p>You have less than a year old!</p>}

            </div>
}