function performOperation(a, b, callback) {
    let sum = a + b
    if (typeof a === "number" && typeof b === "number") {
        callback(null, sum)
    } else {
        callback(new Error("Please make sure to insert two numbers as parameters"), null)
    }
  }
  
  function displayResult(error, result) {
    if (error){
        console.log(error)
    } else {
        console.log(result)
  }
}

let prova = [1, 2]

performOperation(prova, 3, displayResult);
