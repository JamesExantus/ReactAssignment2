import { useState } from 'react'

import RecipeList from './RecipeList'
import recipes from './recipes'
import './App.css'
import './styles.css'


const statuses = {
  1: "easy",
  2: "basic",
  3: "hard",
 
};

function SearchBar() {
  const [query, setQuery] = useState('');

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <label>
      Search:{' '}
      <input
        value={query}
        onChange={handleChange}
      />
    </label>
  );
}



function App() {

 const [query, setQuery] = useState('');
 const [selectedStatus, setSelecetedStatus] = useState(1);

 

 const RecipeLists = recipes.map((recipe, i) => {
    return <RecipeList recipe={recipe} key={i} />;
  });

   const statusButtons = Object.keys(statuses).map(statusId => {
    return <button key={statusId} className={selectedStatus === parseInt(statusId) ? "bg-blue-500" : ""}
      onClick={() => setSelecetedStatus(parseInt(statusId))}
    >{statuses[statusId]}</button>
  })

  return (
    
    <>
    <div className="grid grid-cols-6 my-4">{statusButtons}</div>
    <SearchBar />
    <h1>Recipe Finder</h1> 
      <RecipeList recipes={recipes[0]} />
      <RecipeList recipes={recipes[1]} />
      <RecipeList recipes={recipes[2]} />
      

    </>
     
    
    


  )
}
export default App

