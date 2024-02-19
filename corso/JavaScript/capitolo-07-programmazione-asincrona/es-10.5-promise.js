//Convertire la seguente funzione basata su callback in una funzione basata su Promise.

// function callback_BasedFunction(arg1, arg2, callback) {
//   setTimeout(() => {
//   const result = arg1 + arg2;
//   if (result % 2 !== 0) {
//   callback(null, result);
//   } else {
//   callback(new Error('Result is not odd!'), null); } }, 1000);
//   }

//funzione convertita 
function promise_BasedFunction(a, b) {
    result = a + b
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (result % 2 !== 0) {
                  resolve(result)
                } else {
                   reject("Result is not odd!")
                }
            }, 1000)
    })
}

promise_BasedFunction(5, 2)
    .then((result) => {
        console.log(result)
    })
    .catch((errMsg) => {
        console.log(errMsg)
    })
