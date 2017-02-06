import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class IngredientList extends React.Component {
  constructor(props) {
    super(props);
    this.renderIngredient = this.renderIngredient.bind(this);
    this.newIngredient = this.newIngredient.bind(this);
    const visibility = props.edit === 'true' ?
      { visibility: 'visible' } : { visibility: 'hidden' };
    this.state = {
      visibility
    }
  }

  renderIngredient(item, index) {
    const editable = this.props.edit == 'true';
    let deleteIcon = null;
    if (editable) {
      deleteIcon = <i className="fa fa-trash fa-lg" aria-hidden="true"
        onClick={() => this.props.onDelete(item)} key={index}></i>
    }
    return (
      <div>
        <TextField type='text' name={'' + index} disabled={!editable}
             value={item} onChange={this.props.onIngredientChange} ></TextField>
        {deleteIcon}
      </div>
    );
  }

  newIngredient() {
    this.props.addIngredient(this.newText.getValue());
    this.newText.input.value = '';
  }

  render() {
    return (
      <div className="ingredients">
        <form>
          {this.props.ingredients.map(this.renderIngredient)}
          <span>
            <TextField type='text' style={this.state.visibility}
              ref={(node) => { this.newText = node; } } floatingLabelText='New Ingredient'></TextField>
            <i className="fa fa-lg fa-plus" aria-hidden="true"
              onClick={this.newIngredient} style={this.state.visibility}></i>
          </span>
        </form>
      </div>
    );
  }
}

IngredientList.propTypes = {
  edit: React.PropTypes.string.isRequired,
  onDelete: React.PropTypes.func.isRequired,
  onIngredientChange: React.PropTypes.func.isRequired,
  addIngredient: React.PropTypes.func.isRequired,
  ingredients: React.PropTypes.array

};



