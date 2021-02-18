const db = require("../../data/dbconfig");

function getRecipes() {
	return db("recipes");
}
function getShoppingList(recipeId) {
	return db("ingredients as i").where("recipeId", recipeId).select(["i.ingredient", "i.quantity"]);
}

function getInstructions(recipeId) {
	return db("instructions as i")
		.where("recipeId", recipeId)
		.select(["i.instruction"]);
}


module.exports = {
	getRecipes,
	getShoppingList,
	getInstructions,
};