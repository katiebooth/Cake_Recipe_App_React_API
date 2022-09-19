import logo from './logo.svg';
import './App.css';
import RecipesContainer from './container/RecipesContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import ErrorPage from './components/ErrorPage';
import RecipeDetail from './components/RecipeDetail';
import About from './components/About';

function App() {
  return (
    <Router>
    <NavBar/>
    <Routes>
        <Route path = '/' element={<RecipesContainer/>}/>
        <Route path = '/about' element={<About/>}/>
        {/* <Route path= "/displayrecipe/:id" element={<RecipeDetail/>}/> */}
        <Route path = '*' element={<ErrorPage/>}/>
    </Routes>
    </Router>
  );
}

export default App;
