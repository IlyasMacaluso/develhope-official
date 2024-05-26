const ingredients: string[] = ["oil", "potato", "zucchini", "tomato", "salmon"]
const ingNum = 5

interface Ingredients {
    ings: string[]
    num: number
}

function printIngredients(parameters: Ingredients) {
    parameters.ings.forEach((ing) => console.log(ing))
}
printIngredients({ ings: ingredients, num: ingNum })
