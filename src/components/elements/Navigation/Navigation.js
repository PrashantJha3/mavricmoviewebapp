import React from 'react';
import {BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Movie from '../../Movie/Movie';
import './Navigation.css';

const Navigation = ({ movie }) => (
  <div className="rmdb-navigation">
    <div className="rmdb-navigation-content">
	
      <Link to="/">
        <p>Home</p>
      </Link>
      <p>/</p>
	  <BrowserRouter>
	<Switch>
	 <Route path="/:movieId" component={Movie} exact />
	  <p>Back</p>
	  </Switch>
	  </BrowserRouter>
	  <p>/</p>
	
      <p>{movie}</p>
	  
    </div>
  </div>
)



Navigation.propTypes = {
  movie: PropTypes.string
}

export default Navigation;