/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux';
import { ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE } from './actions';

function recipes(state = [], action) {
  switch (action.type) {
    case ADD_RECIPE:
      return [
        ...state,
        {
          name: action.name,
          ingredients: action.ingredients,
          id: action.id,
          imageURL: action.imageURL
        }
      ];
    case EDIT_RECIPE:
    {
      const index = state.findIndex(recipe => recipe.id === action.id);
      console.log(action);
      return [
        ...state.slice(0, index),
        {
          id : action.id,
          name: action.name,
          ingredients: action.ingredients,
          imageURL: action.imageURL
        },
        ...state.slice(index + 1)
      ];
    }
    case DELETE_RECIPE:
      {
        const index = state.findIndex(recipe => recipe.id === action.id);
        return [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ];
      }
    default:
      return state;
  }
}



const rootReducer = combineReducers({
  recipes
});

export default rootReducer;
