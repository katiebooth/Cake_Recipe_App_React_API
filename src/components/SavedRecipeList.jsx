import SavedRecipe from "./SavedRecipe"
import SavedRecipeInStorage from "./SavedRecipeInStorage"

const SavedRecipeList = ({savedRecipes, savedRecipesInStorage}) => {

    if(!savedRecipes) {
        if(!savedRecipesInStorage) return (
            <div className = 'saved-recipes-list'>
            <h3>Saved Recipes</h3>
            </div>

        )

        const savedRecipesListInStorage = savedRecipesInStorage.map((recipe, index) =>{
            return <SavedRecipeInStorage recipe={recipe} key={index}/>})
    
        return (
        <div className = 'saved-recipes-list'>
        <h3>Saved Recipes</h3>
        <ul className = 'saved-recipes'>
        <li>{savedRecipesListInStorage}</li>
        </ul>
        </div>)
    }

    const savedRecipesList = savedRecipes.map((recipe, index) =>{
        return <SavedRecipe recipe={recipe} key={index}/>
    })

    // console.log(savedRecipesList)

    return (<>
            <div className = 'saved-recipes-list'>
            <h3>Saved Recipes</h3>
            <ul className = 'saved-recipes'>
            {savedRecipesList}
            </ul>
            </div>
            </>
            )

}

export default SavedRecipeList