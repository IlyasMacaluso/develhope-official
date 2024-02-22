function checkAge (age, callback) {
	if (age >= 18) {
		callback(null, "Ok")
	} else {
		callback(new Error("Not ok"), null)
	}
}

checkAge(18, (error, data) => {
	if (error) {
		console.log(error)
    } else {
		console.log(data)
	}
})