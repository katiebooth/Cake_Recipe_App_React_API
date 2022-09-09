
const RecipeDetail = ({selectedRecipe}) => {
    console.log(selectedRecipe)
    
    if(!selectedRecipe) return <></>
    
    return (
        <>
            <h4>{selectedRecipe.strMeal}</h4>
            <ul>Ingredients:
            <li>{selectedRecipe.strIngredient1} : {selectedRecipe.strMeasure1}</li>
            <li>{selectedRecipe.strIngredient2} : {selectedRecipe.strMeasure2}</li>
            <li>{selectedRecipe.strIngredient3} : {selectedRecipe.strMeasure3}</li>
            <li>{selectedRecipe.strIngredient4} : {selectedRecipe.strMeasure4}</li>
            <li>{selectedRecipe.strIngredient5} : {selectedRecipe.strMeasure5}</li>
            <li>{selectedRecipe.strIngredient6} : {selectedRecipe.strMeasure6}</li>
            <li>{selectedRecipe.strIngredient7} : {selectedRecipe.strMeasure7}</li>
            <li>{selectedRecipe.strIngredient8} : {selectedRecipe.strMeasure8}</li>
            <li>{selectedRecipe.strIngredient9} : {selectedRecipe.strMeasure9}</li>
            <li>{selectedRecipe.strIngredient10} : {selectedRecipe.strMeasure10}</li>
            </ul>
            <p>Recipe:</p>
            <p>{selectedRecipe.strInstructions}</p>
            <a href={selectedRecipe.strYoutube}>YouTube Tutorial</a>

        </>
    )
}

export default RecipeDetail