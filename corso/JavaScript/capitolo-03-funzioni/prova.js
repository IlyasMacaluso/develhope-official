function calculate(a, b, callback) {
	return callback(a, b)
}

let result = calculate(1, 2, function (a, b) {
	return a + b
})

console.log(result)