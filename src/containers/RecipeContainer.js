import { connect } from 'react-redux';
import RecipeList from '../components/RecipeList';
import { deleteRecipe } from '../actions'

const mapStateToProps = (state) => ({ recipes: state.recipes });

const RecipeContainer = connect(mapStateToProps, deleteRecipe)(RecipeList);

export default RecipeContainer;
