async function fetchData() {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/random.php`
  );
  try {
    if (response.ok) {
      const data = await response.json();
      return data.meals;
    } else {
      throw Error(`Error: fetch failed`);
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function mealFilter(keyword) {
  const meals = await fetchData();
  if (meals) {
    if (typeof keyword === `string`) {
      let meal = meals[0]
      if (
        meal.strCategory.toUpperCase() === keyword.toUpperCase() ||
        meal.strArea.toUpperCase() === keyword.toUpperCase() ||
        meal.strMeal.toUpperCase().includes(keyword) 
      ) {
        console.log(`Here's a random "${keyword.toUpperCase()}" recipe:
        `);
        console.log(`- Name: ${meal.strMeal}
        `);
        console.log(`- Category: ${meal.strCategory}
        `);
        console.log(`- Nationality: ${meal.strArea}
        `);
        console.log(`- How to make it:
        `);
        console.log(`${meal.strInstructions}
       `);
      } else {
        await mealFilter(keyword);
      }
    }
  }
}

mealFilter(`dessert`);