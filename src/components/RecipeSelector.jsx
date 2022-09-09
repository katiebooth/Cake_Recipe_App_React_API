
const RecipeSelector = ({recipes, onRecipeSelected}) => {
    if(!recipes.meals) return null

    const handleChange = (e) => {
        const chosenRecipe = recipes.meals[e.target.value]
        onRecipeSelected(chosenRecipe)
    }

    const recipeOptions = recipes.meals.map((recipe, index) =>{
        return <option value = {index} key = {index}>{recipe.strMeal}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value = "">Choose a recipe from below</option>
            {recipeOptions}
        </select>
    )
}

export default RecipeSelector