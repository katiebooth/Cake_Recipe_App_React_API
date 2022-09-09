const Recipe = ({recipe}) => {
    return (
        <div className = 'individual-recipe'>
            <img src={recipe.strMealThumb}></img>
            <p>{recipe.strMeal}</p>
         </div>        
    )
}

export default Recipe