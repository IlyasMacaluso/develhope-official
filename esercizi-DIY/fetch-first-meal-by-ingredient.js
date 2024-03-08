async function fetchData() {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
  try {
    if (response.ok) {
      const data = await response.json()
      return data.meals
    } else {
      throw Error(`Error: fetch failed`)
    }
  } catch (error) {
    console.log(error.message)
  }
}

async function mealFilter(keyword) {
  const meals = await fetchData()
  if (meals) {
    if (typeof keyword === `string`) {
      let ingredientFound
      let meal = meals[0]
      for (let key in meal) {
        if (key.includes("strIngredient") && meal[key]) {
          if (meal[key].toUpperCase().includes(keyword.toUpperCase()) && !ingredientFound) {
            console.log(`Here's a random recipe with "${keyword}":
                      `)
            console.log(`Name : "${meal.strMeal}"
                      `)
            console.log(`Category : "${meal.strCategory}"
                      `)
            console.log(`Nationality : "${meal.strArea}"
                      `)
            console.log(`Ingredients :
                      `)
            //getting ingredients and quantities
            let ingredients = [] 
            let quantities = []
            for (key in meal) {
              if (key.includes("strIngredient") && meal[key] !== "") {
                ingredients.push(meal[key])
              } else if (key.includes("strMeasure") && meal[key] !== ""){
                quantities.push(meal[key])
              }
            }
            //printing ingredients and quantities
            for (i = 0; i < ingredients.length; i++) {
                console.log(` - ${ingredients[i]}: ${quantities[i]}`)
            }
            ingredientFound = true
          }
        }
      }
      if (!ingredientFound) {
        await mealFilter(keyword)
      }
    } else {
      console.log(`${keyword} is not a string`)
    }
  }
}

mealFilter(`pepper`)