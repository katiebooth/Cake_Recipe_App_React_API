import Recipe from "./Recipe"

const RecipesList = ({recipes, addToSavedRecipes, onRecipeSelected}) => {
    if(!recipes.meals) return null

    const recipesList = recipes.meals.map((recipe, index)=> {
        return <Recipe recipe = {recipe} key = {index} onRecipeSelected ={onRecipeSelected} addToSavedRecipes = {addToSavedRecipes} />
    })

    // console.log(recipesList)

    return (
        <>
        <div className = 'recipe-list-container'>
        <h3>All Recipes</h3>
        {recipesList}
        </div>
        </>
    )

}

export default RecipesList