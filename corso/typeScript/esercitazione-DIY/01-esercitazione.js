var ingredients = ["oil", "potato", "zucchini", "tomato", "salmon"];
var ingNum = 5;
function printIngredients(parameters) {
    parameters.ings.forEach(function (ing) { return console.log(ing); });
}
printIngredients({ ings: ingredients, num: ingNum });
