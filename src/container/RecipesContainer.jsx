import { useEffect, useState } from "react"
// import { Link } from "react-router-dom"
import RecipesList from "../components/RecipesList"
import RecipeSelector from "../components/RecipeSelector"
import RecipeDetail from "../components/RecipeDetail"
import SavedRecipeList from "../components/SavedRecipeList"

const RecipesContainer = () => {
    const [recipes, setRecipes] = useState([])
    const [selectedRecipe, setSelectedRecipe] = useState('')
    const [savedRecipes, setSavedRecipes] = useState(()=>{
        const savedRecipesJSON = localStorage.getItem('saved recipes list')
        if (savedRecipesJSON == null) {
            return []}
        else {
            return JSON.parse(savedRecipesJSON)}
    })

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

    const addToSavedRecipes = (selectedRecipe) => {
        const copySavedRecipes = [...savedRecipes]
        copySavedRecipes.push(selectedRecipe)
        setSavedRecipes(copySavedRecipes)
    }

    const removeFromSavedRecipes = (selectedRecipe) => {
        const copySavedRecipes = [...savedRecipes]
        const index = copySavedRecipes.indexOf(selectedRecipe)
        copySavedRecipes.splice(index, 1)
        setSavedRecipes(copySavedRecipes)
    }

    const getRecipeGivenId = (selectedRecipeId) => {
        return recipes.find((recipe) => recipe.idMeal === selectedRecipeId)
    }

    useEffect(()=> {
    localStorage.setItem('saved recipes list', JSON.stringify(savedRecipes))
    }, [savedRecipes])

    // console.log(savedRecipesInStorage)
    // console.log(savedRecipes)

    return (
        <>
        <h1>The Sweet Life</h1>
        <h2>Cake Recipes To Satisfy Your Cravings</h2>
        <RecipeSelector recipes={recipes} onRecipeSelected={onRecipeSelected} />
        <hr></hr>
        <div>
        {selectedRecipe ? <RecipeDetail selectedRecipe = {selectedRecipe} addToSavedRecipes = {addToSavedRecipes} getRecipeGivenId={getRecipeGivenId}/> :null}
        </div>
        <div className = 'recipes-container'>
        {recipes ? <RecipesList recipes ={recipes} onRecipeSelected = {onRecipeSelected} addToSavedRecipes = {addToSavedRecipes}/> : null}
        <SavedRecipeList savedRecipes = {savedRecipes} removeFromSavedRecipes ={removeFromSavedRecipes}/>
        </div>
        </>
    )
}

export default RecipesContainer