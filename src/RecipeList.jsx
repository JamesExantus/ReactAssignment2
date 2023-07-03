import { PropTypes } from "prop-types";

function RecipeList(props) {

    
    const {
        image: { src, alt },
        name,
        direction,
        difficulty,
        stars,
      } = props.recipes;

    
    return (
     <div className="j-desc">
        <img 
            className="j-desc__company-image"
            src={src}
            alt={alt}
        />
        <div className="j-desc__details">
            <h2 className="j-desc__job-name">{name}</h2>
            <p className="j-desc__direction">{direction}</p>
            <ul className="j-desc__metadata">
                <li className="j-desc__difficulty">{difficulty}</li>
                <li className="j-desc__stars">{stars}</li>
            </ul>
        </div>
      </div>

    );



  
};


        RecipeList.propTypes = {
            recipes: PropTypes.shape({
                image: PropTypes.shape({
                 src: PropTypes.string,
                 alt: PropTypes.string,
                }),
                 name: PropTypes.string,
                 direction: PropTypes.string,
                 difficulty: PropTypes.string,
                 stars: PropTypes.string,
            })
        }
console.log(typeof PropTypes.string)



  


export default RecipeList

