async function fetchData() {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    try {
        if (response.ok) {
            // console.log(`fetch data ok`);
            const data = await response.json()
            return data.meals
        } else {
            throw Error (`fetch data not ok`)
        }
    } catch (error) {
        console.log(error.message)
    }
}

let filteredMeals = []

async function mealFilter(keyword) {
    for (let i = 0; i <= 100; i++) {
        const meals = await fetchData()
        if (meals) {
            if (typeof keyword === `string`) {
                if (
                    meals[0].strCategory.toUpperCase() ===keyword.toUpperCase() ||
                    meals[0].strArea.toUpperCase() === keyword.toUpperCase()
                ) {
                    filteredMeals.push(meals[0].strMeal)
                }
            }
        }
    }
    if (filteredMeals.length > 0) {
        console.log(`List of "${keyword}" meals`)
        console.log(filteredMeals)
    } else {
        console.log(`no meals`)
    }
}

mealFilter(`dessert`)
