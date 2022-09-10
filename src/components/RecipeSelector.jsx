
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
            <option value = "">Select a recipe here or click on a recipe below to view instructions</option>
            {recipeOptions}
        </select>
    )
}

export default RecipeSelector