import logo from './logo.svg';
import './App.css';
import RecipesContainer from './container/RecipesContainer';

function App() {
  return (
    <>
  <h1>The Sweet Life</h1>
  <h2>Cake Recipes To Satisfy Your Cravings</h2>
  <div className ='recipes-container'>
  <RecipesContainer/>
  </div>
  </>
  );
}

export default App;
