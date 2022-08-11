import React, {useEffect} from 'react';
import './App.css';

const App = () => {

  const APP_ID = "6c9fb7c9";
  const APP_KEY = "e0342cb691cad4a8e62dd65dd2d6740b";

  useEffect(() => {
    getRecipes();
  }, []);
  
  const getRecipes = async () => {
    const response = await fetch(` https://api.edamam.com/api/recipes/v2/search?&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);


  }

  return (
    <div className="App">
      <form className="search-form">
        <input className='search-bar' type="text" />
           <button className='search-button' type="submit">Search..</button>
      </form>
    </div>
  );
}

export default App;
