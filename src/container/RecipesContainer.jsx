import { useEffect, useState } from "react"
import RecipesList from "../components/RecipesList"
import RecipeSelector from "../components/RecipeSelector"
import RecipeDetail from "../components/RecipeDetail"
import SavedRecipeList from "../components/SavedRecipeList"

const RecipesContainer = () => {
    const [recipes, setRecipes] = useState([])
    const [selectedRecipe, setSelectedRecipe] = useState('')
    const [savedRecipes, setSavedRecipes] = useState('')
    const [savedRecipesInStorage, setSavedRecipesInStorage] = useState('')

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

    localStorage.setItem('saved recipes list', JSON.stringify(savedRecipes))

    useEffect(()=>{
        const savedRecipesInStorage = JSON.parse(localStorage.getItem('saved recipes list'))
        if (savedRecipesInStorage !== null) setSavedRecipesInStorage(savedRecipesInStorage)
    }, [])

    // console.log(savedRecipesInStorage)
    // console.log(savedRecipes)

    return (
        <>
        <RecipeSelector recipes={recipes} onRecipeSelected={onRecipeSelected} />
        <hr></hr>
        <div>
        {selectedRecipe ? <RecipeDetail selectedRecipe = {selectedRecipe} addToSavedRecipes = {addToSavedRecipes}/> :null}
        </div>
        <div className = 'recipes-container'>
        {recipes ? <RecipesList recipes ={recipes} onRecipeSelected = {onRecipeSelected} addToSavedRecipes = {addToSavedRecipes}/> : null}
        <SavedRecipeList savedRecipes = {savedRecipes} savedRecipesInStorage = {savedRecipesInStorage}/>
        </div>
        </>
    )
}

export default RecipesContainer