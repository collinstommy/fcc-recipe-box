import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actionCreators from '../actions';

const App = (props) => (
  <div>
    <header>
      <h1>Recipe Box</h1>
      <Link to={'/add'}><i className="material-icons">add</i></Link>
    </header>
    {React.cloneElement(props.children, props)}
  </div>
);

const mapStateToProps = (state) => ({ recipes: state.recipes });

export default connect(mapStateToProps, actionCreators)(App);

