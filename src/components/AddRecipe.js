import React from 'react';
import { browserHistory } from 'react-router';
import IngredientList from './IngredientList';
import TextField from 'material-ui/TextField';


export default class AddRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.addIngredient = this.addIngredient.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onSave = this.onSave.bind(this);
    this.goBack = this.goBack.bind(this);
    this.onIngredientChange = this.onIngredientChange.bind(this);
    this.state = {
      ingredients: []
    };
  }

  addIngredient(input) {
    if (input) {
      const ingredients = this.state.ingredients;
      ingredients.push(input);
      this.setState({
        ingredients: ingredients
      });
    }
  }

  onDelete(item) {
    const ingredientsArray = this.state.ingredients;
    ingredientsArray.splice(ingredientsArray.indexOf(item), 1);
    this.setState({
      ingredients: ingredientsArray
    });
  }

  onIngredientChange(event) {
    console.log(event.target);
    const newIngredients = this.state.ingredients;
    newIngredients[+event.target.name] = event.target.value;
    this.setState({
      ingredients: newIngredients
    });
  }

  onSave() {
    this.props.addRecipe(this.recipeName.getValue(), this.state.ingredients, this.imageURL.getValue());
    browserHistory.push('/');
  }

  renderIngredientList(item, index) {
    return (
      <div>
        <input type='text' value={item} key={index} />
        <i className="fa fa-trash" aria-hidden="true"
          onClick={() => this.onDelete(item)}></i>
      </div>
    )
  }

  goBack() {
    browserHistory.goBack();
  }

  render() {
    return (
      <div className="single">
        <div className="recipeDetails">
          <TextField ref={(node) => { this.recipeName = node; } } floatingLabelText="Recipe Name" />
          <TextField ref={(node) => { this.imageURL = node; } } floatingLabelText="Image URL" />
        <IngredientList onIngredientChange={this.onIngredientChange} onDelete={this.onDelete}
            ingredients={this.state.ingredients}
            edit={'true'}
            addIngredient={this.addIngredient} />
          <div className="buttonList">
            <button className='defaultBtn' onClick={this.onSave}>Save</button>
            <button className='defaultBtn' onClick={this.goBack}>Cancel</button>
          </div>
        </div>
      </div>
    )
  }
}

