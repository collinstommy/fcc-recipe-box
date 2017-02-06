import React from 'react';
import { browserHistory } from 'react-router';
import cloneDeep from 'lodash/cloneDeep';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


import IngredientList from './IngredientList';


export default class Single extends React.Component {
    constructor(props) {
        super(props);
        this.onIngredientChange = this.onIngredientChange.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onSave = this.onSave.bind(this);
        this.goBack = this.goBack.bind(this);
        this.onImageUrlChange = this.onImageUrlChange.bind(this);
        this.addIngredient = this.addIngredient.bind(this);

        const singleRecipe = props.recipes.find((recipe) => recipe.id == props.params.recipeID);
        this.state = {
            recipe: cloneDeep(singleRecipe),
            params: props.params
        }
    }


    onDelete(item) {
        const newRecipe = this.state.recipe;
        const ingredientsArray = newRecipe.ingredients;
        ingredientsArray.splice(ingredientsArray.indexOf(item), 1);
        newRecipe.ingredients = ingredientsArray;
        this.setState({
            recipe: newRecipe
        });
    }

    onIngredientChange(event) {
        const newRecipe = this.state.recipe;
        newRecipe.ingredients[+event.target.name] = event.target.value;
        this.setState({
            recipe: newRecipe
        });
    }

    onImageUrlChange(event) {
        const newRecipe = this.state.recipe;
        newRecipe.imageURL = event.target.value;
        this.setState({
            recipe: newRecipe
        });
    }

    addIngredient(input) {
        const ingredientsArray = this.state.recipe.ingredients;
        ingredientsArray.push(input);
        const newRecipe = this.state.recipe;
        newRecipe.ingredients = ingredientsArray
        this.setState({
            recipe: newRecipe
        });
    }

    onSave() {
        const { id, name, ingredients, imageURL } = this.state.recipe;
        this.props.editRecipe(id, name, ingredients, imageURL);
        browserHistory.goBack();
    }

    goBack() {
        browserHistory.goBack();
    }

    render() {
        let buttons = null;
        if (this.props.edit === 'true') {
            buttons = <div className="buttonList">
                <button onClick={this.onSave} className='defaultBtn'>Save</button>
                <button onClick={this.goBack} className='defaultBtn'>Discard Changes</button>
            </div>;
        } else {
            buttons = <div className="buttonList">
                <button onClick={this.goBack} className='defaultBtn'>Back</button>
            </div>;
        }
        let imageURLTextField = null;
        if (this.props.edit === 'true'){
          imageURLTextField =  <TextField type='text' floatingLabelText='Image URL' onChange={this.onImageUrlChange}></TextField>
        }

        return (
            <div className="single">
                <img src={this.state.recipe.imageURL} />
                <div className='recipeDetails'>
                    <h1>{this.state.recipe.name}</h1>
                    {imageURLTextField}
                    <IngredientList onIngredientChange={this.onIngredientChange}
                        onDelete={this.onDelete}
                        ingredients={this.state.recipe.ingredients}
                        edit={this.props.edit}
                        addIngredient={this.addIngredient} />
                    {buttons}
                </div>
            </div>
        );
    }
}