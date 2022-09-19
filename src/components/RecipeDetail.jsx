import { useParams } from "react-router-dom"

const RecipeDetail = ({selectedRecipe, addToSavedRecipes,getRecipeGivenId }) => {
    // const {id}  = useParams()
    // const selectedRecipe = getRecipeGivenId(Number(id))

    if(!selectedRecipe) return <></>

    const recipeIngrientsAndMesurementsListElements = []
    for (let i = 0; i < 21; i++) {
        let ingrNumber = i+1
        if (selectedRecipe["strIngredient" + ingrNumber]) {
            recipeIngrientsAndMesurementsListElements.push(<li> {selectedRecipe["strIngredient" + ingrNumber]} : {selectedRecipe["strMeasure" + ingrNumber]} </li>
            )
        }
    }

    
    return (
        <div className = 'selected-recipe'>
            <h4>{selectedRecipe.strMeal}</h4>
            <p className='recipe-card-title'>Ingredients:</p>
            <ul>
                {recipeIngrientsAndMesurementsListElements}
            </ul>
            <p className = 'recipe-card-title'>Instructions:</p>
            <p>{selectedRecipe.strInstructions}</p>
            <a className = 'button-in-detail' href={selectedRecipe.strYoutube}>YouTube Tutorial</a>
            <p>
            <button className = 'button-in-detail' onClick={() => addToSavedRecipes(selectedRecipe)}>Add To Saved Recipes</button>
            </p>

        </div>
    )
}

export default RecipeDetail