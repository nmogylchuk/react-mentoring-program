import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './pages/shared/Header/Header';
import Footer from './pages/shared/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import { hot } from 'react-hot-loader';

const App = ({ Router, location, context }) => {
  const [searchIconVisible, setShowSearchIconVisible] = useState(false);

  const handleSearchIcon = visibility => {
    setShowSearchIconVisible(visibility);
  };

  return (
    <Router location={location} context={context}>
    <>
      <Header searchIconVisible={searchIconVisible} handleSearchIcon={handleSearchIcon} />
      <Switch>
        <Route exact path='/' render={() => <Home handleSearchIcon={handleSearchIcon} />} />
        <Route exact path='/film/:id' component={MovieDetails} />
        <Route exact path='/search' component={Home} />
        <Route path='*' component={NotFound} />
      </Switch>
      <Footer />
      </>
     </Router>
  );
};

export default hot(module)(App);
