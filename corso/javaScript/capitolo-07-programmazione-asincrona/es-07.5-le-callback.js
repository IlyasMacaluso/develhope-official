function performOperation(a, b, callback) {
    let sum = a * b
    callback(sum)
  }
  
  function displayResult(result) {
    console.log(result)
  }
  
  performOperation(5, 3, displayResult);