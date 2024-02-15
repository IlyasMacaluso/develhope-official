function performOperation(a, b, callback) {
    let sum = a * b
    if (sum) {
        callback(null, sum)
    } else {
        callback(new Error("Please make sure to insert numbers as parameters"), null)
    }
  }
  
  function displayResult(error, result) {
    if (error){
        console.log(error)
    } else {
        console.log(result)
  }
}

let ciao = []

performOperation(ciao, 3, displayResult);
