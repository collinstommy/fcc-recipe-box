/**
 * Create the store with asynchronously loaded reducers
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {black, red900, yellow50} from 'material-ui/styles/colors';

import App from './components/App';
import Single from './components/Single';
import AddRecipe from './components/AddRecipe';
import RecipeList from './components/RecipeList';

import recipes from './data/recipes';
import rootReducer from './reducers';
import { loadState, saveState} from './localStorage';
require('../styles/application.scss');

const intialState = {recipes};
let persistedState = loadState();

if(persistedState === undefined || persistedState.recipes.length === 0){
  persistedState = intialState;
}

let store = createStore(rootReducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(throttle(()=> {
  saveState(store.getState());
}, 1000));

const muiTheme = getMuiTheme({
  textField: {
    disabledTextColor: black
  }
});

render(
   <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path={"/"} component={App} >
          <IndexRoute component={RecipeList}/>
          <Route path={"view/:recipeID"} component={(props)=> <Single edit='false' {...props} />}/>
          <Route path={"edit/:recipeID"} component={(props)=> <Single edit='true' {...props} />}/>
          <Route path={"add"} component={AddRecipe}/>}/>
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

