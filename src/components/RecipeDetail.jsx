
const RecipeDetail = ({selectedRecipe, addToSavedRecipes}) => {
    
    if(!selectedRecipe) return <></>
    
    return (
        <div className = 'selected-recipe'>
            <h4>{selectedRecipe.strMeal}</h4>
            <p className='recipe-card-title'>Ingredients:</p>
            <ul>
            {selectedRecipe.strIngredient1 ? <li> {selectedRecipe.strIngredient1} : {selectedRecipe.strMeasure1} </li>: null } 
            {selectedRecipe.strIngredient2 ? <li> {selectedRecipe.strIngredient2} : {selectedRecipe.strMeasure2} </li>: null } 
            {selectedRecipe.strIngredient3 ? <li> {selectedRecipe.strIngredient3} : {selectedRecipe.strMeasure3} </li>: null } 
            {selectedRecipe.strIngredient4 ? <li> {selectedRecipe.strIngredient4} : {selectedRecipe.strMeasure4} </li>: null } 
            {selectedRecipe.strIngredient5 ? <li> {selectedRecipe.strIngredient5} : {selectedRecipe.strMeasure5} </li>: null } 
            {selectedRecipe.strIngredient6 ? <li> {selectedRecipe.strIngredient6} : {selectedRecipe.strMeasure6} </li>: null } 
            {selectedRecipe.strIngredient7 ? <li> {selectedRecipe.strIngredient7} : {selectedRecipe.strMeasure7} </li>: null } 
            {selectedRecipe.strIngredient8 ? <li> {selectedRecipe.strIngredient8} : {selectedRecipe.strMeasure8} </li>: null } 
            {selectedRecipe.strIngredient9 ? <li> {selectedRecipe.strIngredient9} : {selectedRecipe.strMeasure9} </li>: null }    
            {selectedRecipe.strIngredient10 ? <li> {selectedRecipe.strIngredient10} : {selectedRecipe.strMeasure10} </li>: null } 
            {selectedRecipe.strIngredient11 ? <li> {selectedRecipe.strIngredient11} : {selectedRecipe.strMeasure11} </li>: null } 
            {selectedRecipe.strIngredient12 ? <li> {selectedRecipe.strIngredient12} : {selectedRecipe.strMeasure12} </li>: null } 
            {selectedRecipe.strIngredient13 ? <li> {selectedRecipe.strIngredient13} : {selectedRecipe.strMeasure13} </li>: null } 
            {selectedRecipe.strIngredient14 ? <li> {selectedRecipe.strIngredient14} : {selectedRecipe.strMeasure14} </li>: null } 
            {selectedRecipe.strIngredient15 ? <li> {selectedRecipe.strIngredient15} : {selectedRecipe.strMeasure15} </li>: null } 
            {selectedRecipe.strIngredient16 ? <li> {selectedRecipe.strIngredient16} : {selectedRecipe.strMeasure16} </li>: null } 
            {selectedRecipe.strIngredient17 ? <li> {selectedRecipe.strIngredient17} : {selectedRecipe.strMeasure17} </li>: null } 
            {selectedRecipe.strIngredient18 ? <li> {selectedRecipe.strIngredient18} : {selectedRecipe.strMeasure18} </li>: null } 
            {selectedRecipe.strIngredient19 ? <li> {selectedRecipe.strIngredient19} : {selectedRecipe.strMeasure19} </li>: null } 
            {selectedRecipe.strIngredient20 ? <li> {selectedRecipe.strIngredient20} : {selectedRecipe.strMeasure20} </li>: null } 
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