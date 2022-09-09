import Recipe from "./Recipe"

const RecipesList = ({recipes}) => {
    if(!recipes.meals) return null

    const recipesList = recipes.meals.map((recipe, index)=> {
        return <Recipe recipe = {recipe} key = {index} />
    })

    // console.log(recipesList)

    return (
        <>
        {recipesList}
        </>
    )

}

export default RecipesList