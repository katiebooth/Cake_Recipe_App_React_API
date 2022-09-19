const SavedRecipe = ({recipe, removeFromSavedRecipes}) => {


    const handleClick = () => {
        removeFromSavedRecipes({recipe})
    }

    return <li className = 'saved-recipe-list'>
        <a href = {recipe.strYoutube}>{recipe.strMeal}</a>
        <button className = 'add-to-saved-button' onClick={handleClick}>Remove From Saved Recipes</button>
        </li>
    
}

export default SavedRecipe