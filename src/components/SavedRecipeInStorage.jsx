const SavedRecipeInStorage = ({recipe}) => {

    return <li>
        <a href = {recipe.strYoutube}>{recipe.strMeal}</a>
        </li>
    
}

export default SavedRecipeInStorage