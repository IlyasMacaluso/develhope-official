// function runCallbacks(callbacks) {
//     callbacks.forEach(callback => callback ());
// }
//   function firstCallback() {
//     console.log("Hello")
//   }

//   function secondCallback() {
//     console.log("My name is")
//   }
  
//   function thirdCallback() {
//     console.log("Ilyas")
//   }

//   const callbackArray = [firstCallback, secondCallback, thirdCallback]

//   runCallbacks(callbackArray)

//per impazzire

function runCallbacks1(array, callbacks) {
            return array.map (number => { 
              return callbacks.map (callback => callback(number))
        })
}

function firstCallback1(num) {
    return num * 2
}

function secondCallback1(num) {
    return num - 1
}
  
function thirdCallback1(num) {
    return `Original number is ${num}`
  }

const callbackArray1 = [firstCallback1, secondCallback1, thirdCallback1]
const numbers = [1, 2, 3]

console.log(runCallbacks1(numbers, callbackArray1))