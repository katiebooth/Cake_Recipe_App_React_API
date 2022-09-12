import SavedRecipe from "./SavedRecipe"

const SavedRecipeList = ({savedRecipes}) => {

    if(!savedRecipes) {
        return (
            <div className = 'saved-recipes-list'>
            <h3>Saved Recipes</h3>
            </div>
        )
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