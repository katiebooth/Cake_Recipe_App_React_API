import { useEffect, useState } from "react"
import RecipesList from "../components/RecipesList"

const RecipesContainer = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        getRecipes()
    }, [])
    
    const getRecipes = () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=cake')
            .then((res) => res.json())
            .then(recipes => setRecipes(recipes))
    }
    
    return (
        <>
        <h3>All Recipes</h3>
        <div className = 'recipe-list-container'>
        {recipes ? <RecipesList recipes ={recipes}/> : null}
        </div>
        </>
    )
}

export default RecipesContainer