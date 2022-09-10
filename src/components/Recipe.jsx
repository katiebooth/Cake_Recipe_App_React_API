const Recipe = ({recipe, addToSavedRecipes, onRecipeSelected}) => {
    return (
        <button onClick={() => onRecipeSelected(recipe)} className = 'individual-recipe'>
            <img src={recipe.strMealThumb}></img>
            <p>{recipe.strMeal}</p>
            <p>
            <button className = 'add-to-saved-button' onClick={() => addToSavedRecipes(recipe)}>Add To Saved Recipes</button>
            </p>
         </button>        
    )
}

export default Recipe