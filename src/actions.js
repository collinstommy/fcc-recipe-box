
import { v4 } from 'node-uuid' 

export const ADD_RECIPE = 'ADD_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
/* action creators */

export function addRecipe(name, ingredients, imageURL) {
  return {
    type: ADD_RECIPE,
    id: v4(),
    name,
    ingredients,
    imageURL
  };
}

export function editRecipe(id, name, ingredients, imageURL){
  return{
    type: EDIT_RECIPE,
    id,
    name,
    ingredients,
    imageURL
  }
}

export function deleteRecipe(id){
  return{
    type: DELETE_RECIPE,
    id
  }
}
