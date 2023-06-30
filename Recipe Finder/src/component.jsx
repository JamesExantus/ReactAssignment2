function conponent(recipe) {
  const {
    name,
    image: { src, alt },
    description,
  } = recipe;

  return (
    <div className="j-desc">
      <img 
      className="j-desc__company-image"
      src={src}
      alt={alt}
    />
    <div className="j-desc__details">
      <h2 className="j-desc__name">{name}</h2>
      <p className="j-desc__company">{image}</p>
      <ul className="j-desc__metadata">
        <li className="j-desc__description">{description}</li>
        <li className="j-desc__salary"></li>
        <li className="j-desc__posting_date"></li>
      </ul>
    </div>
    </div>
  )
  
}

      export default Component;
      
        
 

//create a search bar

//when I type something into the text bar the text should use useState to use directions to access the recipe list.

