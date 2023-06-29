 import { useState } from "react";
 const listofRecipes = [
  {
    name: "applepie",
    src: "https://images-gmi-pmc.edge-generalmills.com/75593ed5-420b-4782-8eae-56bdfbc2586b.jpg",
    alt: "applepieimage"
  },
  {
    name: "cake",
     src: "https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipemediafiles/recipes/retail/x17/rainbow-cake760x580.jpg?ext=.jpg",
     alt: "cakeimage"
  },
  {
    name: "cookies",
     src: "https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg",
     alt: "cookieimage"
  }
 ]

 

  
 export default function Component() {

  let [food,setFood] = useState(0);

    return (
      <div>
      <div>
      <h1>Photos of recipes</h1>
      <p>{listofRecipes.name}</p>
      </div>
 

      <label>
        Enter your recipe:
     <textarea onChange={e =>  setFood(e.target.value) }/>
     <button type="submit">Send</button>
      </label>
      </div>

    );

  }
      

      

      
      
        
 

//create a search bar

//when I type something into the text bar the text should use useState to use directions to access the recipe list.

