import React, {useEffect, useState} from 'react';
import './App.css';
import {FcSearch} from 'react-icons/fc';

const App = () => {

  const APP_ID = "6c9fb7c9";
  const APP_KEY = "e0342cb691cad4a8e62dd65dd2d6740b";

  useEffect(() => {
    getRecipes();
  }, []);
  
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);


  }

  return (
    <div className="App">
      <form className="search-form">
        <input className='search-bar' type="text" />
      {/* <button className='search-button' type="submit"><faCoffee />Search</button> */}
        <button className='search-button' type="submit"><FcSearch /></button>
      </form>
    </div>
  );
}

export default App;
