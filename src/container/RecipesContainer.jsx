import { useEffect, useState } from "react"
import RecipesList from "../components/RecipesList"
import RecipeSelector from "../components/RecipeSelector"
import RecipeDetail from "../components/RecipeDetail"

const RecipesContainer = () => {
    const [recipes, setRecipes] = useState([])
    const [selectedRecipe, setSelectedRecipe] = useState('')

    useEffect(() => {
        getRecipes()
    }, [])
    
    const getRecipes = () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=cake')
            .then((res) => res.json())
            .then(recipes => setRecipes(recipes))
    }
    
    const onRecipeSelected = (recipe) => {
        setSelectedRecipe(recipe)
    }

    return (
        <>
        <RecipeSelector recipes={recipes} onRecipeSelected={onRecipeSelected}/>
        <hr></hr>
        <div className = 'selected-recipe'>
        {selectedRecipe ? <RecipeDetail selectedRecipe = {selectedRecipe}/> :null}
        </div>
        <h3>All Recipes</h3>
        <div className = 'recipe-list-container'>
        {recipes ? <RecipesList recipes ={recipes}/> : null}
        </div>
        </>
    )
}

export default RecipesContainer