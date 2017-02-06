import { connect} from 'react-redux';
import Single from '../components/Single';

const mapStateToProps = (state) => ({
  recipes: state.recipes
});

const SingleContainer = connect(
  mapStateToProps)(Single);

export default SingleContainer;