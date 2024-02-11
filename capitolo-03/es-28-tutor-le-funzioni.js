function sayHelloName(name) {
  if (typeof name === "string") {
    return  "Hello, " + name
  }
}

let greet = sayHelloName("Ilyas")

console.log(greet)


