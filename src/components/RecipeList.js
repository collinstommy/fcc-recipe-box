import React, { PropTypes } from 'react';
import Recipe from './Recipe';

const RecipeList = (props) => (
  <div className="shell">
    <div className="container">
        {props.recipes.map((recipe) =>
          <Recipe
            key={recipe.id}
            {...recipe}
            {...props}
          />
        )}
    </div>
  </div>
);

export default RecipeList

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
