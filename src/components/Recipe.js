import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Recipe = ({ name, ingredients, imageURL, id, deleteRecipe }) => (
  <div className="recipe">
      <img src={imageURL} />
      <h2>{name}</h2>
      <div className="controls">
        <Link to={`/view/${id}`} className='viewLink'> View Recipe</Link>
        <Link to={`/edit/${id}`}><i className="fa fa-pencil" aria-hidden="true"></i></Link>
        <i className="fa fa-trash" aria-hidden="true" 
        onClick={deleteRecipe.bind(null, id)}></i>
      </div>
    </div>
);

Recipe.propTypes = {
  name: PropTypes.string.isRequired
};

export default Recipe;
